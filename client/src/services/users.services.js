import { Api } from "@config/Api";

export const userService = {
    login
};

function login(properties) {
    return Api.post('/login', properties)
        .then(res => {
            let user = JSON.parse(res.config.data);

            localStorage.setItem('user', JSON.stringify({ email: user.username }));
            return user;
        });
}