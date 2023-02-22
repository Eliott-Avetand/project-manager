import { sprintsServices } from "@services/sprints.services";

export const sprintActions = {
    getAll,
    getOne,
    create,
    update,
    remove,
    clearSuccess
};

function getAll() {
    const request = () => ({ type: 'sprints/getAllRequest' });
    const success = (sprints) => ({ type: 'sprints/getAllSuccess', sprints });
    const failure = (error) => ({ type: 'sprints/getAllFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.getAll()
            .then(sprints => {
                dispatch(success(sprints));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function getOne(id) {
    const request = () => ({ type: 'sprints/getOneRequest' });
    const success = (sprint) => ({ type: 'sprints/getOneSuccess', sprint });
    const failure = (error) => ({ type: 'sprints/getOneFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.getOne(id)
            .then(sprint => {
                dispatch(success(sprint));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function create(properties) {
    const request = () => ({ type: 'sprints/createRequest' });
    const success = (sprints) => ({ type: 'sprints/createSuccess', sprints });
    const failure = (error) => ({ type: 'sprints/createFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.create(properties)
            .then(sprints => {
                dispatch(success(sprints));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function update(properties, id) {
    const request = () => ({ type: 'sprints/updateRequest' });
    const success = (sprints) => ({ type: 'sprints/updateSuccess', sprints, id });
    const failure = (error) => ({ type: 'sprints/updateFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.update(properties, id)
            .then(sprints => {
                dispatch(success(sprints));
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function remove(id) {
    const request = () => ({ type: 'sprints/removeRequest' });
    const success = (sprints) => ({ type: 'sprints/removeSuccess', sprints, id });
    const failure = (error) => ({ type: 'sprints/removeFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.remove(id)
            .then(sprints => {
                dispatch(success(sprints));
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