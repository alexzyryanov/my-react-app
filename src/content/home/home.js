import React from "react";
import s from "./home.module.css"


function Home(props) {
    return (
        <div className={s.items}>
            {props.other.map((other, index) => {
                return (
                    <div key={index} className={s.item}>{other.id} {other.name}</div>
                )
            })}
        </div>
    )
}


export default Home;