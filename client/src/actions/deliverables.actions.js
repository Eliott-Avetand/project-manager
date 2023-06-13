import { deliverablesServices } from "@services/deliverables.services";
import { toast } from "react-toastify";

export const deliverableActions = {
    create,
    getAll,
    clearSuccess
};

function create(properties) {
    const request = () => ({ type: 'deliverables/createRequest' });
    const success = (deliverable) => ({ type: 'deliverables/createSuccess', deliverable });
    const failure = (error) => ({ type: 'deliverables/createFailure', error });

    return dispatch => {
        dispatch(request());
        deliverablesServices.create(properties)
            .then(deliverable => {
                dispatch(success(deliverable));
                toast.success(`The deliverable ${properties.title} has been created.`);
            })
            .catch(error => {
                console.log(error);
                dispatch(failure(error));
            }
        );
    };
}

function getAll() {
    const request = () => ({ type: 'deliverables/getAllRequest' });
    const success = (deliverables) => ({ type: 'deliverables/getAllSuccess', deliverables });
    const failure = (error) => ({ type: 'deliverables/getAllFailure', error });

    return dispatch => {
        dispatch(request());
        deliverablesServices.getAll()
            .then(deliverables => {
                dispatch(success(deliverables));
            })
            .catch(error => {
                console.log(error);
                dispatch(failure(error));
            }
        );
    };
}

function clearSuccess() {
    return { type: 'deliverables/clearSuccess' };
}