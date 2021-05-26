import {userAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/objectHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let stateInitial = {
    users: [],
    pageSize: 5,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const UsersReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.curPage,
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId,}
}
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId,}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users,}
}
export const setCurrentPage = (curPage) => {
    return {type: SET_CURRENT_PAGE, curPage,}
}
export const setUsersTotalCount = (count) => {
    return {type: SET_USERS_TOTAL_COUNT, count,}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching,}
}
export const toggleFollowingInProgress = (isFetching, userId) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId,}
}

export const requestUsers = (pageSize, page) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await userAPI.getUsers(pageSize, page);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleFollowingInProgress(true, userId));

        const data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) =>
    (dispatch) => {
       followUnfollowFlow(dispatch, userId, userAPI.setFollow.bind(userAPI), followSuccess)
}

export const unfollow = (userId) =>
    (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.setUnfollow.bind(userAPI), unfollowSuccess)
}

export default UsersReducer;
