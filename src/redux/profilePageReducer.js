import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';

let stateInitial = {
    postsData: [
        {id: 1, post: 'My first post', likesCount: 2},
        {id: 2, post: 'Hi', likesCount: 7},
        {id: 3, post: 'Hello', likesCount: 1},],
    profile: null,
    isFetching: false,
    status: '',
}

const profileReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: action.post,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
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
        case SET_USER_STATUS: {
            return {
                ...state,
               status: action.status,
            };
        }
        default:
            return state;
    }
}

export const addPost = (post) => {
    return{type: ADD_POST, post};
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile,}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching,}
}
export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status,}
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

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
    }
}

export default profileReducer;