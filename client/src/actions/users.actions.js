import { userService } from '@services/users.services';

export const userActions = {
    login,
    logout
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