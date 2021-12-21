import React from "react";
import s from "./header.module.css"
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header>
            <div className={s.nav}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/genres">Жанры</NavLink>
                <NavLink to="/categories">Категории</NavLink>
                <NavLink to="/releases">Релизы</NavLink>
            </div>
        </header>
    )
}


export default Header;