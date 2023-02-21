import { Api } from "@config/Api";

export const userService = {
    login,
    logout
};

function login(properties) {
    return Api.post('/auth/login', properties)
        .then(res => localStorage.setItem('token', res.access_token));
}

function logout() {
    localStorage.removeItem('token');
}