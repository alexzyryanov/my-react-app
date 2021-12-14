import React from "react";
import s from "./content.module.css";
import { Route, Routes } from "react-router-dom";
import ContainerCreate from "./create/container_create";
import ContainerHome from "./home/container_home";
import ContainerGenre from "./genre/container_genre";
import ContainerFavorite from "./favorite/container_favorite";


function Content() {
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<ContainerHome/>}/>
                <Route path='/genres' element={<ContainerGenre/>}/>
                <Route path='/create' element={<ContainerCreate/>}/>
                <Route path='/favorites' element={<ContainerFavorite/>}/>
            </Routes>            
        </div>
    )
}


export default Content;