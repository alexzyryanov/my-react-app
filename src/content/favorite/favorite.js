import React from "react";
import s from "./favorite.module.css";


function Favorite(props) {
    console.log(props)

    return (
        <div className={s.items}>
            {/* {props.sounds.map((song, index) => {
                return (
                    <div key={index} className={s.item}>{song.id} {song.name}</div>
                )
            })} */}
        </div>
    )
}


export default Favorite;