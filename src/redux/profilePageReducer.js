import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let stateInitial = {
    postsData: [
        {id: 1, post: 'My first post', likesCount: 2},
        {id: 2, post: 'Hi', likesCount: 7},
        {id: 3, post: 'Hello', likesCount: 1},],
    postNewText: '',
    profile: null,
    isFetching: false,
}

const profileReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.postNewText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postNewText: '',
            };
        }
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                postNewText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return{type: ADD_POST};
}
export const updateTextActionCreator = (text) => {
    return {type: UPDATE_NEW_TEXT, newText: text};
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile,}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching,}
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(data));
        })
    }
}

export default profileReducer;