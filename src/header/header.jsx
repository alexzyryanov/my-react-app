import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';
import logo from './logo.png';

function Header() {
  return (
    <header>
      <div className={s.logo}>
        <img src={logo} alt="cover" />
      </div>
      <div className={s.nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/genres">Жанры</NavLink>
        <NavLink to="/categories">Категории</NavLink>
        <NavLink to="/releases">Релизы</NavLink>
      </div>
    </header>
  );
}

export default Header;
