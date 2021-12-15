import React from "react";
import s from "./genre.module.css"


function Genre(props) {
    console.log(props)
    // if (props.genres) {
    //     return (
    //         <div className={s.items}>
    //             {props.genres.genres.map((genre, index) => {
    //                 return (
    //                     <div key={index} className={s.item}>{genre}</div>
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    return (
        <div className={s.items}>
            <h1>Genres</h1>
        </div>
    )
}


export default Genre;