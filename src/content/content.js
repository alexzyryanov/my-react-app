import React from "react";
import s from "./content.module.css";
import { Route, Routes } from "react-router-dom";
import ContainerHome from "./home/container_home";
import ContainerGenre from "./genre/container_genre";
import ContainerCategorie from "./categorie/container_categorie";
import ContainerRelease from "./release/container_release";


function Content() {
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<ContainerHome/>}/>
                <Route path='/genres' element={<ContainerGenre/>}/>
                <Route path='/categories' element={<ContainerCategorie/>}/>
                <Route path='/releases' element={<ContainerRelease/>}/>
            </Routes>            
        </div>
    )
}


export default Content;