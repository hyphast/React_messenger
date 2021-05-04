import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogReducer from "./dialogPageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer
    })

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;