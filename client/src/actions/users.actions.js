import { userService } from '@services/users.services';
import { toast } from 'react-toastify';

export const userActions = {
    login,
    logout,
    create,
    update,
    getAll,
    getOne,
    profil,
    setProfilePicture,
    getProfilePicture,
    remove,
    clearSuccess
};

function login(properties) {
    const request = () => ({ type: 'user/loginRequest' });
    const success = (user) => ({ type: 'user/loginSuccess', user });
    const failure = (error) => ({ type: 'user/loginFailure', error });

    return dispatch => {
        dispatch(request());
        userService.login(properties)
            .then(user => {
                dispatch(success(user));
                toast.success('Successfully logged in!');
            })
            .catch(error => {
                dispatch(failure(error));
                toast.error(error?.response?.data?.message);
            }
        );
    };
}

function logout(properties) {
    const request = () => ({ type: 'user/logoutRequest' });
    const success = (user) => ({ type: 'user/logoutSuccess', user });
    const failure = (error) => ({ type: 'user/logoutFailure', error });

    return dispatch => {
        dispatch(request());
        userService.logout(properties)
            .then(user => {
                dispatch(success(user));
                toast.info('Successfully logged out!');
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function create(properties) {
    const request = () => ({ type: 'user/createRequest' });
    const success = (user) => ({ type: 'user/createSuccess', user });
    const failure = (error) => ({ type: 'user/createFailure', error });

    return dispatch => {
        dispatch(request());
        userService.create(properties)
            .then(user => {
                dispatch(success(user));
                toast.success(`The user '${properties.username}' has been created.`);
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function update(properties, id) {
    const request = () => ({ type: 'user/updateRequest' });
    const success = () => ({ type: 'user/updateSuccess' });
    const failure = (error) => ({ type: 'user/updateFailure', error });

    return dispatch => {
        dispatch(request());
        userService.update(properties, id)
            .then(() => {
                dispatch(success());
                toast.success(`The user '${properties.username}' has been changed.`);
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function getAll() {
    const request = () => ({ type: 'user/getAllRequest' });
    const success = (users) => ({ type: 'user/getAllSuccess', users });
    const failure = (error) => ({ type: 'user/getAllFailure', error });

    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(users => {
                dispatch(success(users));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function getOne(id) {
    const request = () => ({ type: 'user/getOneRequest' });
    const success = (user) => ({ type: 'user/getOneSuccess', user });
    const failure = (error) => ({ type: 'user/getOneFailure', error });

    return dispatch => {
        dispatch(request());
        userService.getOne(id)
            .then(user => {
                dispatch(success(user));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function profil() {
    const request = () => ({ type: 'user/profilRequest' });
    const success = (user) => ({ type: 'user/profilSuccess', user });
    const failure = (error) => ({ type: 'user/profilFailure', error });

    return dispatch => {
        dispatch(request());
        userService.profil()
            .then(user => {
                dispatch(success(user));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function setProfilePicture(properties, id) {
    const request = () => ({ type: 'user/setProfilePictureRequest' });
    const success = (file) => ({ type: 'user/setProfilePictureSuccess', file });
    const failure = (error) => ({ type: 'user/setProfilePictureFailure', error });

    return dispatch => {
        dispatch(request());
        userService.setProfilePicture(properties, id)
            .then(file => {
                dispatch(success(file));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function getProfilePicture(id) {
    const request = () => ({ type: 'user/getProfilePictureRequest' });
    const success = (file) => ({ type: 'user/getProfilePictureSuccess', file });
    const failure = (error) => ({ type: 'user/getProfilePictureFailure', error });

    return dispatch => {
        dispatch(request());
        userService.getProfilePicture(id)
            .then(file => {
                dispatch(success(file));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function remove(username, id) {
    const request = () => ({ type: 'user/removeRequest' });
    const success = () => ({ type: 'user/removeSuccess', id });
    const failure = (error) => ({ type: 'user/removeFailure', error });

    return dispatch => {
        dispatch(request());
        userService.remove(id)
            .then(() => {
                dispatch(success());
                toast.success(`The user '${username}' has been removed.`);
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function clearSuccess() {
    return { type: 'user/clearSuccess' };
}