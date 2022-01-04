import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './content.module.css';
import ContainerHome from './home/container_home';
import ContainerGenre from './genre/container_genre';
import ContainerCategorie from './categorie/container_categorie';
import ContainerRelease from './release/container_release';
import Album from './album/album';
import Playlist from './playlist/playlist';
import Track from './track/track';
import Overview from './overview/overview';

function Content() {
  return (
    <div className={s.content}>
      <Routes>
        <Route path="/" element={<ContainerHome />} />
        <Route path="/genres" element={<ContainerGenre />} />
        <Route path="/categories" element={<ContainerCategorie />} />
        <Route path="/releases" element={<ContainerRelease />} />
        <Route path="/albums/:id" element={<Album />} />
        <Route path="/playlists/:id" element={<Playlist />} />
        <Route path="/tracks/:id" element={<Track />} />
        <Route path="/overview/:id" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default Content;
