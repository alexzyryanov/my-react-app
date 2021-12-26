import React from "react";
import s from "./preloader.module.css"


function Preloader() {
    return (
        <div className={s.preloader}>
            <div className={s.ball}></div>
        </div>
    )
}


export default Preloader;