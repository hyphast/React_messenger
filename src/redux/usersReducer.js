import {userAPI} from "../api/api";

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
    followingInProgress: [],
}

const UsersReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        return {...user, followed: true,}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        return {...user, followed: false,}
                    }
                    return user;
                })
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
                : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default: return state;
    }
}
export const followSuccess = (userId) => {
    return {type: FOLLOW, userId, }
}
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId, }
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
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId, }
}

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        userAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
       dispatch(toggleFollowingInProgress(true, userId));
        userAPI.setFollow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.setUnfollow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        })
    }
}

export default UsersReducer;
