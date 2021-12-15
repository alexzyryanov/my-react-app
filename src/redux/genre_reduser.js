const ADD_GENRE = "ADD_GENRE"


let initialState = {
    genres: null
}


const genreReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_GENRE:
            return {
                ...state,
                genres: action.text
            }

        default:
            return state
    }
}


export let addGenre = (text) => {
    return {
        type: ADD_GENRE,
        text: text
    }
}


export default genreReduser;