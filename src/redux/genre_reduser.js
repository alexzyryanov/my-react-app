const ADD_ITEM = "ADD_ITEM"


let initialState = {
    genres: [{id: 1, name: "genre1"},
            {id: 2, name: "genre2"},
            {id: 3, name: "genre3"}],
    github: null
}


const genreReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state, 
                github: action.text
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