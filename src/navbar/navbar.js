import React from "react";
import s from "./navbar.module.css";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <navbar>
            <div className={s.nav}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/genres">Жанры</NavLink>
                <NavLink to="#">Моя медиатека</NavLink>
            </div>
            <div className={s.myNav}>
                <NavLink to="/create">Создать плейлист</NavLink>
                <NavLink to="/favorites">Любимые треки</NavLink>
            </div>
        </navbar>
    )
}


export default Navbar;