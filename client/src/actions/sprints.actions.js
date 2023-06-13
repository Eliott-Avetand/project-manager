import { sprintsServices } from "@services/sprints.services";
import { toast } from "react-toastify";

export const sprintActions = {
    getAll,
    getOne,
    getCurrent,
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
                console.log(error);
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

function getCurrent() {
    const request = () => ({ type: 'sprints/getCurrentRequest' });
    const success = (sprint) => ({ type: 'sprints/getCurrentSuccess', sprint });
    const failure = (error) => ({ type: 'sprints/getCurrentFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.getCurrent()
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
    const success = (sprint) => ({ type: 'sprints/createSuccess', sprint });
    const failure = (error) => ({ type: 'sprints/createFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.create(properties)
            .then(sprint => {
                dispatch(success(sprint));
                toast.success(`The sprint '${sprint.title}' has been created.`);
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function update(properties, id) {
    const request = () => ({ type: 'sprints/updateRequest' });
    const success = (sprint) => ({ type: 'sprints/updateSuccess', sprint, id });
    const failure = (error) => ({ type: 'sprints/updateFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.update(properties, id)
            .then(sprint => {
                dispatch(success(sprint));
                toast.success(`The sprint '${sprint.title}' has been updated.`);
            })
            .catch(error => {
                dispatch(failure(error));
            }
        );
    };
}

function remove(name, id) {
    const request = () => ({ type: 'sprints/removeRequest' });
    const success = () => ({ type: 'sprints/removeSuccess', id });
    const failure = (error) => ({ type: 'sprints/removeFailure', error });

    return dispatch => {
        dispatch(request());
        sprintsServices.remove(id)
            .then(() => {
                dispatch(success());
                toast.success(`The sprint '${name}' has been removed.`);
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