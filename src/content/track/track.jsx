import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../api/api';
import s from './track.module.css';
import Preloader from '../preloader/preloader';

function Track() {
  const { id } = useParams();

  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setCount(await request(`https://api.spotify.com/v1/playlists/${id}`));
    }
    fetchData();
  }, [id]);

  if (!count) {
    return (
      <Preloader />
    );
  }

  return (
    <div className={s.album_page}>
      <div className={s.about}>
        <img src={count.images[0].url} alt="cover" />
        <div className={s.info}>
          <p>{count.type}</p>
          <a href={count.external_urls.spotify} target="_blank" rel="noopener noreferrer">{count.name}</a>
          <p>
            {count.tracks.total}
            {' '}
            треков
          </p>
        </div>
      </div>
      <div className={s.tracks}>
        {count.tracks.items.map((track) => (
          <div key={track.id} className={s.track}>
            <audio src={track.track.preview_url} controls><track kind="captions" /></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Track;
