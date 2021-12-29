import React from "react";
import { Link } from "react-router-dom";
import s from "./genre.module.css";


function Genre(props) {
    console.log(props)
    return (
        <div className={s.items}>
            {props.genres.map((genre, index) => {
                return (
                    <Link to={`/overview/${genre}`}>
                    <div key={index} className={s.item}>
                        <div className={s.name}>
                            <h1>{genre}</h1>
                        </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}


export default Genre;