import { cardsServices } from "@services/cards.services";

export const sprintActions = {
    getAll,
    clearSuccess
};

function getAll() {
    const request = () => ({ type: 'cards/getAllRequest' });
    const success = (cards) => ({ type: 'cards/getAllSuccess', cards });
    const failure = (error) => ({ type: 'cards/getAllFailure', error });

    return dispatch => {
        dispatch(request());
        cardsServices.getAll()
            .then(cards => {
                dispatch(success(cards));
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