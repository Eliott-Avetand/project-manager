import { cardsServices } from "@services/cards.services";
import { toast } from "react-toastify";

export const cardActions = {
    create,
    getAll,
    updateTask,
    clearSuccess
};

function create(sprintId, properties) {
    const request = () => ({ type: 'cards/createRequest' });
    const success = (card) => ({ type: 'cards/createSuccess', card });
    const failure = (error) => ({ type: 'cards/createFailure', error });

    return dispatch => {
        dispatch(request());
        cardsServices.create(sprintId, properties)
            .then(card => {
                dispatch(success(card));
                toast.success(`The card ${properties.name} has been created.`);
            })
            .catch(error => {
                console.log(error);
                dispatch(failure(error));
            }
        );
    };
}

function getAll(sprintId) {
    const request = () => ({ type: 'cards/getAllRequest' });
    const success = (cards) => ({ type: 'cards/getAllSuccess', cards });
    const failure = (error) => ({ type: 'cards/getAllFailure', error });

    return dispatch => {
        dispatch(request());
        cardsServices.getAll(sprintId)
            .then(cards => {
                dispatch(success(cards));
            })
            .catch(error => {
                console.log(error);
                dispatch(failure(error));
            }
        );
    };
}

function updateTask(taskId, taskUpdated) {
    const request = () => ({ type: 'cards/updateTaskRequest' });
    const success = (task) => ({ type: 'cards/updateTaskSuccess', task });
    const failure = (error) => ({ type: 'cards/updateTaskFailure', error });

    return dispatch => {
        dispatch(request());
        cardsServices.updateTask(taskId, taskUpdated)
            .then(task => {
                dispatch(success(task));
            })
            .catch(error => {
                console.log(error);
                dispatch(failure(error));
            }
        );
    };
}

function clearSuccess() {
    return { type: 'cards/clearSuccess' };
}