import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.id)
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
    return {type: ADD_POST, post};
}
export const deletePost = (id) => {
    return {type: DELETE_POST, id};
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

export const getUserProfile = (userId) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await profileAPI.getProfile(userId);
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(data));
    }


export const getUserStatus = (userId) =>
    async (dispatch) => {
        const data = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(data));
    }

export const updateUserStatus = (status) =>
    async (dispatch) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
}

export default profileReducer;