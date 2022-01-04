import { combineReducers, createStore } from 'redux';
import categorieReduser from './categorie_reduser';
import genreReduser from './genre_reduser';
import releaseReduser from './release_reduser';

const redusers = combineReducers({
  genres: genreReduser,
  categories: categorieReduser,
  releases: releaseReduser,
});

const store = createStore(redusers);

export default store;
