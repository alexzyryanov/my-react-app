const ADD_CATEGORIE = "ADD_CATEGORIE"
const CATEGORIE_LOADER_ON = "CATEGORIE_LOADER_ON"
const CATEGORIE_LOADER_OFF = "CATEGORIE_LOADER_OFF"
const CATEGORIE_OFFSET_PLUS = "CATEGORIE_OFFSET_PLUS"
const CATEGORIE_OFFSET_MINUS = "CATEGORIE_OFFSET_MINUS"


let initialState = {
    categories: null,
    categorieLoader: true,
    categorieOffset: 0
}


const categorieReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CATEGORIE:
            return {
                ...state,
                categories: action.text
            }

        case CATEGORIE_LOADER_OFF:
            return {
                ...state,
                categorieLoader: action.text
            }

        case CATEGORIE_LOADER_ON:
            return {
                ...state,
                categorieLoader: action.text
            }

        case CATEGORIE_OFFSET_PLUS:
            return {
                ...state,
                categorieOffset: action.text
            }

        case CATEGORIE_OFFSET_MINUS:
            return {
                ...state,
                categorieOffset: action.text
            }

        default:
            return state
    }
}


export let addCategorie = (text) => {
    return {
        type: ADD_CATEGORIE,
        text: text
    }
}


export let categorieLoaderOff = () => {
    return {
        type: CATEGORIE_LOADER_OFF,
        text: false
    }
}


export let categorieLoaderOn = () => {
    return {
        type: CATEGORIE_LOADER_ON,
        text: true
    }
}


export let categoriePlus = (text) => {
    return {
        type: CATEGORIE_OFFSET_PLUS,
        text: text
    }
}


export let categorieMinus = (text) => {
    return {
        type: CATEGORIE_OFFSET_MINUS,
        text: text
    }
}


export default categorieReduser;