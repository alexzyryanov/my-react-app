const ADD_GENRE = "ADD_GENRE"
const GENRE_LOADER_OFF = "GENRE_LOADER_OFF"


let initialState = {
    genres: null,
    genreLoader: true
}


const genreReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_GENRE:
            return {
                ...state,
                genres: action.text
            }

        case GENRE_LOADER_OFF:
            return {
                ...state,
                genreLoader: action.text
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


export let genreLoaderOff = () => {
    return {
        type: GENRE_LOADER_OFF,
        text: false
    }
}


export default genreReduser;