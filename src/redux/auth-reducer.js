import {logAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => {
    return {type: SET_USER_DATA, payload: {userId, login, email, isAuth}}
}

export const getAuthUserData = () => {
    return (dispatch) => {
        logAPI.isAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email,true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        logAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        logAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
