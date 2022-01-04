const ADD_CATEGORIE = 'ADD_CATEGORIE';
const CATEGORIE_LOADER_ON = 'CATEGORIE_LOADER_ON';
const CATEGORIE_LOADER_OFF = 'CATEGORIE_LOADER_OFF';
const CATEGORIE_OFFSET_PLUS = 'CATEGORIE_OFFSET_PLUS';
const CATEGORIE_OFFSET_MINUS = 'CATEGORIE_OFFSET_MINUS';

const initialState = {
  categories: null,
  categorieLoader: true,
  categorieOffset: 0,
};

// eslint-disable-next-line default-param-last
const categorieReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORIE:
      return {
        ...state,
        categories: action.text,
      };

    case CATEGORIE_LOADER_OFF:
      return {
        ...state,
        categorieLoader: action.text,
      };

    case CATEGORIE_LOADER_ON:
      return {
        ...state,
        categorieLoader: action.text,
      };

    case CATEGORIE_OFFSET_PLUS:
      return {
        ...state,
        categorieOffset: action.text,
      };

    case CATEGORIE_OFFSET_MINUS:
      return {
        ...state,
        categorieOffset: action.text,
      };

    default:
      return state;
  }
};

export const addCategorie = (text) => ({
  type: ADD_CATEGORIE,
  text,
});

export const categorieLoaderOff = () => ({
  type: CATEGORIE_LOADER_OFF,
  text: false,
});

export const categorieLoaderOn = () => ({
  type: CATEGORIE_LOADER_ON,
  text: true,
});

export const categoriePlus = (text) => ({
  type: CATEGORIE_OFFSET_PLUS,
  text,
});

export const categorieMinus = (text) => ({
  type: CATEGORIE_OFFSET_MINUS,
  text,
});

export default categorieReduser;
