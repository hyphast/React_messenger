import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'eac5f45f-896f-4c20-99d7-f0286a193cbb',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const userAPI = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        })
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put('profile/status', {status}).then(response => {
            return response.data;
        })
    }
}

export const logAPI = {
    isAuth() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    },
}

