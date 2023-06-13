import { Api } from "@config/Api";
import Cookies from "js-cookie";
import { toast } from 'react-toastify';

export const sprintsServices = {
    getAll,
    getOne,
    getCurrent,
    create,
    update,
    remove
};

function getAll() {
    return Api.get('/sprints')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getOne(id) {
    return Api.get(`/sprints/${id}`)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getCurrent() {
    return Api.get('/sprints/current')
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function create(properties) {
    return Api.post('/sprints', properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function update(properties, id) {
    return Api.patch(`/sprints/${id}`, properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function remove(id) {
    return Api.delete(`/sprints/${id}`)
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
        window.location.href='/auth/login';
    }
    toast.error(err?.response?.data?.message ? err.response.data.message : 'An error occured');
    throw err;
}