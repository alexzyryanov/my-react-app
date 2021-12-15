const ADD_RELEASE = "ADD_RELEASE"


let initialState = {
    releases: null
}


const releaseReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_RELEASE:
            return {
                ...state, 
                releases: action.text
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


export default releaseReduser;