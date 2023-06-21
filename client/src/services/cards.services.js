import { Api } from "@config/Api";
import Cookies from "js-cookie";
import { toast } from 'react-toastify';

export const cardsServices = {
    create,
    getAll,
    updateTask,
    remove,
};

function create(sprintId, properties) {
    return Api.post(`/sprints/${sprintId}/cards`, properties)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function getAll(sprintId) {
    return Api.get(`/sprints/${sprintId}/cards`)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function updateTask(taskId, taskUpdated) {
    return Api.patch(`/tasks/${taskId}`, taskUpdated)
        .then(res => handleResponse(res))
        .catch(err => handleError(err));
}

function remove(sprintId, cardId) {
    return Api.delete(`/sprints/${sprintId}/cards/${cardId}`)
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