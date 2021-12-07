import React from "react";
import "./create.module.css";
import {draftRedactorActionCreator, addNewTrackActionCreator} from "../../redux/create_reduser"


function Create(props) {

    let textRef = React.createRef()

    let changer = () => {
        let text = textRef.current.value
        props.dispatch(draftRedactorActionCreator(text))
    }

    let click = () => {
        let text = textRef.current.value
        props.dispatch(addNewTrackActionCreator(text))
    }

    return (
        <div>
            <input ref={textRef} type="text" value={props.draft} onChange={changer}/>
            <button onClick={click}>Click</button>
        </div>
    )
}


export default Create;