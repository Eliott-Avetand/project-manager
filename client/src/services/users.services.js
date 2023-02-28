import { Api } from "@config/Api";
import Cookies from 'js-cookie';

export const userService = {
    login,
    logout,
    create,
    getAll,
    setProfilePicture,
    getProfilePicture
};

function login(properties) {
    return Api.post('/auth/login', properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function logout() {
    return Api.post('/auth/logout')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function create(properties) {
    return Api.post('/users', properties, { headers: { "Content-type": "multipart/form-data" } })
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getAll() {
    return Api.get('/users')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function setProfilePicture(properties, id) {
    return Api.post(`/users/${id}/picture`, properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getProfilePicture(id) {
    return Api.get(`/users/${id}/picture`, { responseType: 'blob' })
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

const handleResponse = (res) => {
    if (res.status === 200 || res.status === 201)
        return res.data;
}

const handleError = (err) => {
    if (err.response.status === 401) {
        Cookies.remove('token');
        if (window.location.pathname !== '/auth/login')
            window.location.href='/auth/login';
    }
    throw err;
}