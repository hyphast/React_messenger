import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '063e79e1-62a7-4390-b59e-d524e6f3f202',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const userAPI = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        })
    }
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
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
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
    login(email, password, rememberMe) {
        return instance.post('/auth/login', {email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete('/auth/login').then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    isFollowing(userId) {
        return instance.get(`follow/${userId}`).then(response => {
            return response.data;
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
    }
}

