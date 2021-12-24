const ADD_RELEASE = "ADD_RELEASE"
const RELEASE_LOADER_ON = "RELEASE_LOADER_ON"
const RELEASE_LOADER_OFF = "RELEASE_LOADER_OFF"
const OFFSET_PLUS = "OFFSET_PLUS"
const OFFSET_MINUS = "OFFSET_MINUS"


let initialState = {
    releases: null,
    releaseLoader: true,
    offset: 0
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

        case OFFSET_PLUS:
            return {
                ...state,
                offset: action.text
            }

        case OFFSET_MINUS:
            return {
                ...state,
                offset: action.text
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


export let offsetPlus = (text) => {
    return {
        type: OFFSET_PLUS,
        text: text
    }
}


export let offsetMinus = (text) => {
    return {
        type: OFFSET_MINUS,
        text: text
    }
}


export default releaseReduser;