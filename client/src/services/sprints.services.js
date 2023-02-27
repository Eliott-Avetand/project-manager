import { Api } from "@config/Api";
import Cookies from "js-cookie";

export const sprintsServices = {
    getAll,
    getOne,
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
        .then(res => handleResponse(res));
}

function create(properties) {
    return Api.post('/sprints', properties)
        .then(res => handleResponse(res));
}

function update(properties, id) {
    return Api.patch(`/sprints/${id}`, properties)
        .then(res => handleResponse(res));
}

function remove(id) {
    return Api.delete(`/sprints/${id}`)
        .then(res => handleResponse(res));
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
    throw err;
}