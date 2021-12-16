const ADD_CATEGORIE = "ADD_CATEGORIE"
const CATEGORIE_LOADER_ON = "CATEGORIE_LOADER_ON"
const CATEGORIE_LOADER_OFF = "CATEGORIE_LOADER_OFF"


let initialState = {
    categories: null,
    categorieLoader: true
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


export default categorieReduser;