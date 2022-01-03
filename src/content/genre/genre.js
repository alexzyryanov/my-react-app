import React from "react";
import { Link } from "react-router-dom";
import s from "./genre.module.css";


function Genre(props) {
    return (
        <div className={s.items}>
            {props.genres.map((genre, index) => {
                return (
                    <Link key={index} to={`/overview/${genre}`}>
                        <div className={s.item}>
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