import React from "react";
import s from "./content.module.css";
import Genre from "./genre/genre";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./favorite/favorite";
import Create from "./create/create";


function Content(props) {
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<Home data={props.data.other}/>}/>
                <Route path='/genres' element={<Genre data={props.data.genres}/>}/>
                <Route path='/create' element={<Create printMessage={props.printMessage}/>}/>
                <Route path='/favorite' element={<Favorite data={props.data.sounds} printMessage={props.printMessage}/>}/>
            </Routes>            
        </div>
    )
}


export default Content;