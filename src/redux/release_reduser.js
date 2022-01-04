const ADD_RELEASE = 'ADD_RELEASE';
const RELEASE_LOADER_ON = 'RELEASE_LOADER_ON';
const RELEASE_LOADER_OFF = 'RELEASE_LOADER_OFF';
const RELEASE_OFFSET_PLUS = 'RELEASE_OFFSET_PLUS';
const RELEASE_OFFSET_MINUS = 'RELEASE_OFFSET_MINUS';

const initialState = {
  releases: null,
  releaseLoader: true,
  releaseOffset: 0,
};

// eslint-disable-next-line default-param-last
const releaseReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RELEASE:
      return {
        ...state,
        releases: action.text,
      };

    case RELEASE_LOADER_OFF:
      return {
        ...state,
        releaseLoader: action.text,
      };

    case RELEASE_LOADER_ON:
      return {
        ...state,
        releaseLoader: action.text,
      };

    case RELEASE_OFFSET_PLUS:
      return {
        ...state,
        releaseOffset: action.text,
      };

    case RELEASE_OFFSET_MINUS:
      return {
        ...state,
        releaseOffset: action.text,
      };

    default:
      return state;
  }
};

export const addRelease = (text) => ({
  type: ADD_RELEASE,
  text,
});

export const releaseLoaderOff = () => ({
  type: RELEASE_LOADER_OFF,
  text: false,
});

export const releaseLoaderOn = () => ({
  type: RELEASE_LOADER_ON,
  text: true,
});

export const releasePlus = (text) => ({
  type: RELEASE_OFFSET_PLUS,
  text,
});

export const releaseMinus = (text) => ({
  type: RELEASE_OFFSET_MINUS,
  text,
});

export default releaseReduser;
