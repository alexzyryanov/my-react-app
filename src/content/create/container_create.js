import Create from "./create";
import {draftRedactorActionCreator, addNewTrackActionCreator} from "../../redux/create_reduser"
import { connect } from "react-redux";


let contentParam = (state) => {
    return {
        soundDraft: state.sounds.soundDraft
    }
}


let contentCall = (dispatch) => {
    return {
        valueCreator: (text) => {
            dispatch(draftRedactorActionCreator(text))
        },
        addNewTrack: (text) => {
            dispatch(addNewTrackActionCreator(text))
        }
    }
}


const ContainerCreate = connect(contentParam, contentCall)(Create)


export default ContainerCreate;