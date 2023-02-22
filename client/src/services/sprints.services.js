import { Api } from "@config/Api";

export const sprintsServices = {
    getAll,
    getOne,
    create,
    update,
    remove
};

function getAll() {
    return Api.get('/sprints')
        .then(res => handleResponse(res));
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
    else if (res.status === 401) {
        localStorage.removeItem('token');
        window.location.href='/auth/login';
    } else
        return res;
}