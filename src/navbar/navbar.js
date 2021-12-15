import React from "react";
import s from "./navbar.module.css";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <navbar>
            <div className={s.nav}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/genres">Жанры</NavLink>
                <NavLink to="/categories">Категории</NavLink>
                <NavLink to="/releases">Релизы</NavLink>
            </div>
        </navbar>
    )
}


export default Navbar;