import { Api } from "@config/Api";

export const userService = {
    login,
    logout
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

const handleResponse = (res) => {
    if (res.status === 200 || res.status === 201)
        return res.data;
}

const handleError = (err) => {
    if (err.response.status === 401)
        window.location.href='/auth/login';
}