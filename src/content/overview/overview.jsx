import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../api/api';
import Preloader from '../preloader/preloader';
import s from './overview.module.css';

function Overview() {
  const { id } = useParams();

  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setCount(await request(`https://api.spotify.com/v1/recommendations?seed_genres=${id}`));
    }
    fetchData();
  }, [id]);

  if (!count) {
    return (
      <Preloader />
    );
  }

  return (
    <div className={s.items}>
      {count.tracks.map((track) => (
        <a key={track.id} href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <div className={s.item}>
            <img src={track.album.images[2].url} alt="cover" />
            <div className={s.name}>
              <h1>{track.name}</h1>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Overview;
