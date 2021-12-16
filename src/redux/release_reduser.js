const ADD_RELEASE = "ADD_RELEASE"
const RELEASE_LOADER_ON = "RELEASE_LOADER_ON"
const RELEASE_LOADER_OFF = "RELEASE_LOADER_OFF"


let initialState = {
    releases: null,
    releaseLoader: true
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


export default releaseReduser;