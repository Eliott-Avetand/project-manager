const initialState = {
    action: '',
    loading: false,
    error: {},
    cards: [],
    card: {}
}

export default function cardsReducer(state = initialState, action) {
    switch (action.type) {
        // Cards create
        case 'cards/createRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'cards/createSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                cards: [...state.cards, action.card]
            };
        case 'cards/createFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
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
        // Update task
        case 'cards/updateTaskRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'cards/updateTaskSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                task: action.task
            };
        case 'cards/updateTaskFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Delete card
        case 'cards/removeRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'cards/removeSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
            };
        case 'cards/removeFailure':
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