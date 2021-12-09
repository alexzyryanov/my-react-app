import Create from "./create";
import {draftRedactorActionCreator, addNewTrackActionCreator} from "../../redux/create_reduser"
import { connect } from "react-redux";


let contentParam = (state) => {
    return {
        soundDraft: state.sounds.soundDraft
    }
}


const ContainerCreate = connect(contentParam, {draftRedactorActionCreator, addNewTrackActionCreator})(Create)


export default ContainerCreate;