import React from "react";
import s from "./genre.module.css"


function Genre(props) {
    return (
        <div className={s.items}>
            {props.data.map(genre => {
                return (
                    <div className={s.item}>{genre.id} {genre.name}</div>
                )
            })}
        </div>
    )
}


export default Genre;