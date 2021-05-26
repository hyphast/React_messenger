import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initialiazedSuccess = () => {
    return {type: SET_INITIALIZED}
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())

        Promise.all([promise]).then(() => {
            dispatch(initialiazedSuccess());
        })
    }
}

export default appReducer;
