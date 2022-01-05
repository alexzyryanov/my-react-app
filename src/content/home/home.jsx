import React from 'react';
import s from './home.module.css';
import icon from './icon.png';

function Home() {
  return (
    <div className={s.icon}>
      <img src={icon} alt="icon" />
    </div>
  );
}

export default Home;
