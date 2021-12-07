import React from "react";
import s from "./favorite.module.css";


function Favorite(props) {
    return (
        <div className={s.items}>
            {props.state.map(song => {
                return (
                    <div className={s.item}>{song.id} {song.name}</div>
                )
            })}
        </div>
    )
}


export default Favorite;