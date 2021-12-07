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
                <Route path='/' element={<Home state={props.state.other}/>}/>
                <Route path='/genres' element={<Genre state={props.state.genres}/>}/>
                <Route path='/create' element={<Create draft={props.state.soundDraft} dispatch={props.dispatch}/>}/>
                <Route path='/favorite' element={<Favorite state={props.state.sounds}/>}/>
            </Routes>            
        </div>
    )
}


export default Content;