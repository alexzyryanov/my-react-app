/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';
import logo from './logo.png';

function Header() {
  const [styleMenu, setDisplay] = useState('none');

  function menuClick() {
    if (styleMenu === 'none') {
      setDisplay('flex');
    } else {
      setDisplay('none');
    }
  }

  return (
    <header>
      <div className={s.logo}>
        <NavLink to="/my-react-app/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={s.nav_button} onClick={menuClick}>
        <div className={s.line} />
        <div className={s.line} />
        <div className={s.line} />
        <div className={s.menu} style={{ display: styleMenu }}>
          <NavLink to="/genres">Жанры</NavLink>
          <NavLink to="/categories">Категории</NavLink>
          <NavLink to="/releases">Релизы</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
