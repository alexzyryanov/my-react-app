import React from "react";
import s from "./genre.module.css";


function Genre(props) {
    console.log(props)
    return (
        <div className={s.items}>
            {props.genres.map((genre, index) => {
                return (
                    <div key={index} className={s.item}>
                        <div className={s.name}>
                            <h1>{genre}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Genre;