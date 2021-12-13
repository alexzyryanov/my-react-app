import React from "react";
import "./create.module.css";


function Create(props) {

    let changer = (event) => {
        let text = event.target.value
        props.draftRedactorActionCreator(text)
    }

    let click = (event) => {
        let text = event.target.value
        props.addNewTrackActionCreator(text)
    }

    return (
        <div>
            <input type="text" value={props.soundDraft} onChange={changer}/>
            <button onClick={click}>Click</button>
        </div>
    )
}


export default Create;