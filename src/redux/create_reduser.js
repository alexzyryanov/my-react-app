const DRAFT_REDACTOR = "DRAFT-REDACTOR"
const ADD_NEW_TRACK = "ADD-NEW-TRACK"


let initialState = {
    sounds: [{id: 1, name: "track1"},
            {id: 2, name: "track2"},
            {id: 3, name: "track3"}],
    soundDraft: ""
}


const createReduser = (state = initialState, action) => {
    
    switch (action.type) {
        case DRAFT_REDACTOR:
            return {
                ...state, 
                soundDraft: action.text
            }

        case ADD_NEW_TRACK:
            let newTrack = {id: 3, name: action.text}
            return {
                ...state,
                sounds: [...state.sounds, newTrack],
                soundDraft: ""
            }

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