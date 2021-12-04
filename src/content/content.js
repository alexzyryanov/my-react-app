import React from "react";
import s from "./content.module.css";
import Genre from "./genre/genre";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";


function Content() {
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/genres' element={<Genre/>}/>
            </Routes>            
        </div>
    )
}


export default Content;