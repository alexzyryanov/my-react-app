const DRAFT_REDACTOR = "DRAFT-REDACTOR"
const ADD_NEW_TRACK = "ADD-NEW-TRACK"


let initialState = {
    sounds: [{id: 1, name: "track1"},
            {id: 2, name: "track2"},
            {id: 3, name: "track3"}],
    soundDraft: "f"
}


const createReduser = (state = initialState, action) => {

    let stateCopy = {...state}
    
    switch (action.type) {
        case DRAFT_REDACTOR:
            stateCopy.soundDraft = action.text
            return stateCopy

        case ADD_NEW_TRACK:
            stateCopy.sounds = [...state.sounds]
            stateCopy.sounds.push({id: 3, name: action.text})
            stateCopy.soundDraft = ""
            return stateCopy

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