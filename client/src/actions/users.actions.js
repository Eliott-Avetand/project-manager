import { userService } from '@services/users.services';

export const userActions = {
    login,
    logout,
    create,
    getAll,
    setProfilePicture,
    getProfilePicture,
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
                window.location.href='/';
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function logout() {
    const request = () => ({ type: 'user/logoutRequest' });
    const success = () => ({ type: 'user/logoutSuccess' });

    return dispatch => {
        dispatch(request());
        userService.logout()
        dispatch(success());
        window.location.href='/auth/login';
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

function clearSuccess() {
    return { type: 'user/clearSuccess' };
}