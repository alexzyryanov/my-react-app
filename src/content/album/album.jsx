import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './album.module.css';
import request from '../../api/api';
import Preloader from '../preloader/preloader';

function Album() {
  const { id } = useParams();

  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setCount(await request(`https://api.spotify.com/v1/albums/${id}`));
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
        <img src={count.images[1].url} alt="cover" />
        <div className={s.info}>
          <div className={s.type}>
            <p>{count.album_type}</p>
          </div>
          <div className={s.name}>
            <a href={count.external_urls.spotify} target="_blank" rel="noopener noreferrer">{count.name}</a>
          </div>
          <div className={s.artists}>
            {count.artists.map((artist) => (
              <a key={artist.id} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{artist.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className={s.tracks}>
        {count.tracks.items.map((track) => (
          <div key={track.id} className={s.track}>
            <audio src={track.preview_url} controls><track kind="captions" /></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
