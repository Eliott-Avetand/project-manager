import { Api } from "@config/Api";

export const cardsServices = {
    getAll
};

function getAll() {
    return Api.get('/cards')
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