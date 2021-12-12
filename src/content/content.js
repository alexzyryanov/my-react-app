import React from "react";
import s from "./content.module.css";
import { Route, Routes } from "react-router-dom";
import ContainerCreate from "./create/container_create";
import ContainerHome from "./home/container_home";
import ContainerGenre from "./genre/container_genre";
import ContainerFavorite from "./favorite/container_favorite";
import T_page from "./t_page/t_page";


function Content() {
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<ContainerHome/>}/>
                <Route path='/genres' element={<ContainerGenre/>}/>
                <Route path='/create' element={<ContainerCreate/>}/>
                <Route path='/favorite' element={<ContainerFavorite/>}/>
                <Route path='/t_page' element={<T_page/>}/>
            </Routes>            
        </div>
    )
}


export default Content;