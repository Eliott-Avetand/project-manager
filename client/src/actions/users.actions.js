import { userService } from '@services/users.services';

export const userActions = {
    login,
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
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}