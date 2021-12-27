const ADD_RELEASE = "ADD_RELEASE"
const RELEASE_LOADER_ON = "RELEASE_LOADER_ON"
const RELEASE_LOADER_OFF = "RELEASE_LOADER_OFF"
const RELEASE_OFFSET_PLUS = "RELEASE_OFFSET_PLUS"
const RELEASE_OFFSET_MINUS = "RELEASE_OFFSET_MINUS"


let initialState = {
    releases: null,
    releaseLoader: true,
    releaseOffset: 0
}


const releaseReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_RELEASE:
            return {
                ...state, 
                releases: action.text
            }

        case RELEASE_LOADER_OFF:
            return {
                ...state,
                releaseLoader: action.text
            }

        case RELEASE_LOADER_ON:
            return {
                ...state,
                releaseLoader: action.text
            }

        case RELEASE_OFFSET_PLUS:
            return {
                ...state,
                releaseOffset: action.text
            }

        case RELEASE_OFFSET_MINUS:
            return {
                ...state,
                releaseOffset: action.text
            }

        default:
            return state
    }
}


export let addRelease = (text) => {
    return {
        type: ADD_RELEASE,
        text: text
    }
}


export let releaseLoaderOff = () => {
    return {
        type: RELEASE_LOADER_OFF,
        text: false
    }
}


export let releaseLoaderOn = () => {
    return {
        type: RELEASE_LOADER_ON,
        text: true
    }
}


export let releasePlus = (text) => {
    return {
        type: RELEASE_OFFSET_PLUS,
        text: text
    }
}


export let releaseMinus = (text) => {
    return {
        type: RELEASE_OFFSET_MINUS,
        text: text
    }
}


export default releaseReduser;