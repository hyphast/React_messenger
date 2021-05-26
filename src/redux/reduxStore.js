import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    })

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;