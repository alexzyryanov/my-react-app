const ADD_ITEM = "ADD_ITEM"


let initialState = {
    genres: null
}


const genreReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state, 
                genres: action.text
            }

        default:
            return state
    }
}


export let addItemActionCreator = (text) => {
    return {
        type: ADD_ITEM,
        text: text
    }
}


export default genreReduser;