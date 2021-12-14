const ADD_ITEM = "ADD_ITEM"


let initialState = {
    favorites: null
}


const favoriteReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state, 
                favorites: action.text
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


export default favoriteReduser;