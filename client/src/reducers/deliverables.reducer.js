const initialState = {
    action: '',
    loading: false,
    error: {},
    deliverables: [],
    deliverable: {}
}

export default function deliverablesReducer(state = initialState, action) {
    switch (action.type) {
        // Deliverables create
        case 'deliverables/createRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'deliverables/createSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                deliverables: [...state.deliverables, action.deliverable]
            };
        case 'deliverables/createFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Deliverables getAll
        case 'deliverables/getAllRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'deliverables/getAllSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                deliverables: action.deliverables
            };
        case 'deliverables/getAllFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Clear redux
        case 'deliverables/clearSuccess':
            return {
                ...state,
                action: action.type
            };
        default:
            return state;
    }
}