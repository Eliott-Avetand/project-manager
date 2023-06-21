import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080" : 'https://api.loustik-manager.fr:8080';
const instance = axios.create({ withCredentials: true });

export const Api = {
    get(path, options) {
        return new Promise ((resolve, reject) => {
            instance.get(`${baseUrl}${path}`, options).then((response) => {
                resolve(response);
            }).catch((err) => {
                if (!err.response)
                    console.log(err);
                reject(err);
            });
        });
    },
    post(path, body, header) {
        return new Promise ((resolve, reject) => {
            instance.post(`${baseUrl}${path}`, body, header)
            .then((response) => {
                resolve(response);
            }).catch((err) => {
                if (!err.response)
                    console.log(err);
                reject(err);
            });
        });
    },
    patch(path, body) {
        return new Promise ((resolve, reject) => {
            instance.patch(`${baseUrl}${path}`, body).then((response) => {
                resolve(response);
            }).catch((err) => {
                if (!err.response)
                    console.log(err);
                reject(err);
            });
        });
    },
    delete(path, header) {
        return new Promise ((resolve, reject) => {
            instance.delete(`${baseUrl}${path}`, header).then((response) => {
                resolve(response);
            }).catch((err) => {
                if (!err.response)
                    console.log(err);
                reject(err);
            });
        });
    },
}