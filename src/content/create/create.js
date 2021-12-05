import React from "react";
import s from "./create.module.css";


function Create(props) {

    let textRef = React.createRef()

    let click = () => {
        let text = textRef.current.value
        // alert(text)
        props.printMessage(text)
    }

    return (
        <div>
            <input ref={textRef} type="text"/>
            <button onClick={click}>Click</button>
        </div>
    )
}


export default Create;