import React from "react";
import s from "./home.module.css"


function Home(props) {
    return (
        <div className={s.items}>
            {props.data.map(other => {
                return (
                    <div className={s.item}>{other.id} {other.name}</div>
                )
            })}
        </div>
    )
}


export default Home;