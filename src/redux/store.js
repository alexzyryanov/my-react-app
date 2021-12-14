import { combineReducers, createStore } from "redux";
import createReduser from "./create_reduser";
import favoriteReduser from "./favorite_reduser";
import genreReduser from "./genre_reduser";
import homeReduser from "./home_reduser";


let redusers = combineReducers({
    sounds: createReduser,
    other: homeReduser,
    genres: genreReduser,
    favorites: favoriteReduser
})


let store = createStore(redusers)


export default store;