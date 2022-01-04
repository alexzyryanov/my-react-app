const ADD_GENRE = 'ADD_GENRE';
const GENRE_LOADER_OFF = 'GENRE_LOADER_OFF';

const initialState = {
  genres: null,
  genreLoader: true,
};

// eslint-disable-next-line default-param-last
const genreReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GENRE:
      return {
        ...state,
        genres: action.text,
      };

    case GENRE_LOADER_OFF:
      return {
        ...state,
        genreLoader: action.text,
      };

    default:
      return state;
  }
};

export const addGenre = (text) => ({
  type: ADD_GENRE,
  text,
});

export const genreLoaderOff = () => ({
  type: GENRE_LOADER_OFF,
  text: false,
});

export default genreReduser;
