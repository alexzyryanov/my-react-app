import React from "react";
import s from "./favorite.module.css"


function Favorite(props) {
    console.log(props)

    let textRef = React.createRef()

    let click = () => {
        let text = textRef.current.value
        props.printMessage(text)
    }


    return (
        <div className={s.items}>
            {props.data.map(song => {
                return (
                    <div className={s.item}>{song.id} {song.name}</div>
                )
            })}
            <input ref={textRef} type="text"/>
            <button onClick={click}>Click</button>
        </div>
    )
}


export default Favorite;