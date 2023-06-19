import { Api } from "@config/Api";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const userService = {
    login,
    logout,
    create,
    update,
    getAll,
    getOne,
    profil,
    setProfilePicture,
    getProfilePicture,
    remove
};

function login(properties) {
    return Api.post('/auth/login', properties)
        .then(res => {
            if (res.status === 200 || res.status === 201)
                localStorage.setItem('user', res.data);
        })
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function logout() {
    return Api.post('/auth/logout')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function create(properties) {
    return Api.post('/users', properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function update(properties, id) {
    return Api.patch(`/users/${id}`, properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function profil() {
    return Api.get('/users/profil')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getAll() {
    return Api.get('/users')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getOne(id) {
    return Api.get(`/users/${id}`)
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

function remove(id) {
    return Api.delete(`/users/${id}`)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

const handleResponse = (res) => {
    if (res.status === 200 || res.status === 201)
        return res.data;
}

const handleError = (err) => {
    if (err.response.status === 401) {
        localStorage.removeItem('user');
        Cookies.remove('token');
        if (window.location.pathname !== '/auth/login')
        window.location.href='/auth/login';
    }
    toast.error(err?.response?.data?.message ? err.response.data.message : 'An error occured');
    throw err;
}