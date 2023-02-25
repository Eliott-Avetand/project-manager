const initialState = {
    action: '',
    loading: false,
    error: {},
    cards: []
}

export default function sprintsReducer(state = initialState, action) {
    switch (action.type) {
        // Cards getAll
        case 'cards/getAllRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'cards/getAllSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                cards: action.cards
            };
        case 'cards/getAllFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Clear redux
        case 'cards/clearSuccess':
            return {
                ...state,
                action: action.type
            };
        default:
            return state;
    }
}