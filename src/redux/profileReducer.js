import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SET_LIKE = 'profile/SET_IS_LIKED';

let stateInitial = {
    postsData: [
        {id: 1, post: 'My first post', date: 'Posted: 12:15', likesCount: 2, liked: true},
        {id: 2, post: 'Hi', date: 'Posted: 18:54', likesCount: 7, liked: false},
        {id: 3, post: 'Hello', date: 'Posted: 09:32', likesCount: 1, liked: false},],
    profile: null,
    isFetching: false,
    status: '',
}

const profileReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_POST: {
            let date = new Date();
            let hours = date.getHours();
            let min = date.getMinutes();
            let newPost = {
                id: 4,
                post: action.post,
                date: `Posted: ${hours}:${min}`,
                likesCount: 0,
                liked: false
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
        case SET_LIKE: {
            let likesCount = action.isLiked ? action.likes + 1 : action.likes - 1;
            return {
                ...state,
                postsData: state.postsData.map(post => {
                    if(post.id === action.postId) {
                        return {
                            ...post,
                            likesCount: likesCount,
                            liked: action.isLiked
                        }
                    } else {
                        return post
                    }
                })
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
    return {type: SET_USER_PROFILE, profile}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}
export const setLike = (isLiked, postId, likes) => {
    return {type: SET_LIKE, isLiked, postId, likes}
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