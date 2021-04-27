import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogReducer from "./dialogPageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    })

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;