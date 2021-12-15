const ADD_CATEGORIE = "ADD_CATEGORIE"


let initialState = {
    categories: null
}


const categorieReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CATEGORIE:
            return {
                ...state,
                categories: action.text
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


export default categorieReduser;