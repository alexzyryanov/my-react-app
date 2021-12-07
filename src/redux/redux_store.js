import { combineReducers, createStore } from "redux";
import createReduser from "./create_reduser";


let redusers = combineReducers({
    sounds: createReduser
})


let store = createStore(redusers)


export default store