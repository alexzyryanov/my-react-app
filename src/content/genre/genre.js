import React from "react";
import s from "./genre.module.css"


function Genre(props) {
    return (
        <div className={s.items}>
            {props.genres.map((genre, index) => {
                return (
                    <div key={index} className={s.item}>{genre.id} {genre.name}</div>
                )
            })}
        </div>
    )
}


export default Genre;