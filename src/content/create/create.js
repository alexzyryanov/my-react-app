import React from "react";
import "./create.module.css";


function Create(props) {

    let textRef = React.createRef()

    let changer = () => {
        let text = textRef.current.value
        props.draftRedactorActionCreator(text)
    }

    let click = () => {
        let text = textRef.current.value
        props.addNewTrackActionCreator(text)
    }

    return (
        <div>
            <input ref={textRef} type="text" value={props.soundDraft} onChange={changer}/>
            <button onClick={click}>Click</button>
        </div>
    )
}


export default Create;