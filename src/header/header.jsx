import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';
import logo from './logo.png';

function Header() {
  return (
    <header>
      <div className={s.logo}>
        <NavLink to="/my-react-app/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={s.nav_button}>
        <div className={s.line} />
        <div className={s.line} />
        <div className={s.line} />
        <div className={s.menu}>
          <NavLink to="/genres">Жанры</NavLink>
          <NavLink to="/categories">Категории</NavLink>
          <NavLink to="/releases">Релизы</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
