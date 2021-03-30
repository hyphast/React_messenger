import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogReducer from "./dialogPageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogReducer,
    UsersPage: usersReducer,
    })

let store = createStore(reducers);

window.store = store;

export default store;