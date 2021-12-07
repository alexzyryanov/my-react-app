const DRAFT_REDACTOR = "DRAFT-REDACTOR"
const ADD_NEW_TRACK = "ADD-NEW-TRACK"


const createReduser = (state, action) => {
    switch (action.type) {
        case DRAFT_REDACTOR:
            state.soundDraft = action.text
            return state

        case ADD_NEW_TRACK:
            state.sounds.push({id: 3, name: action.text})
            state.soundDraft = ""
            return state

        default:
            return state
    }
}


export let draftRedactorActionCreator = (text) => {
    return {
        type: DRAFT_REDACTOR,
        text: text
    }
}

export let addNewTrackActionCreator = (text) => {
    return {
        type: ADD_NEW_TRACK,
        text: text
    }
}


export default createReduser;