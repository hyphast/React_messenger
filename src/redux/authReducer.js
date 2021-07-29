import {logAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth, captcha) => {
    return {type: SET_USER_DATA, payload: {userId, login, email, isAuth, captcha}}
}
export const getCaptchaUrlSuccess = (captcha) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captcha}}
}

export const getAuthUserData = () =>
    async (dispatch) => {
        const data = await logAPI.isAuth();

        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }


export const login = (email, password, rememberMe, captcha) =>
    async (dispatch) => {
        const data = await logAPI.login(email, password, rememberMe, captcha);
        debugger
        if (data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
        if(data.resultCode === 10) {
          dispatch(getCaptchaUrl());
        }
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('loginForm', {_error: message}));
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch) => {
      debugger
        const data = await securityAPI.getCaptchaUrl();
        const captcha = data.url;

        dispatch(getCaptchaUrlSuccess(captcha));
    }

export const logout = () =>
    async (dispatch) => {
        debugger
        const data = await logAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null));

        }
}

export default authReducer;
