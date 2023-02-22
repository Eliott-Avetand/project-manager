const initialState = {
    action: '',
    loading: false,
    error: {},
    sprints: [],
    sprint: {}
}

export default function sprintsReducer(state = initialState, action) {
    switch (action.type) {
        // Sprints getAll
        case 'sprints/getAllRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'sprints/getAllSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                sprints: action.sprints
            };
        case 'sprints/getAllFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Sprints getOne
        case 'sprints/getOneRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'sprints/getOneSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                sprint: action.sprint
            };
        case 'sprints/getOneFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Sprints create
        case 'sprints/createRequest':
            return {
                ...state,
                action: action.type,
                loading: true,
                error: {},
            };
        case 'sprints/createSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
            };
        case 'sprints/createFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Sprints update
        case 'sprints/updateRequest':
            return {
                ...state,
                action: action.type,
                loading: true,
                error: {},
            };
        case 'sprints/updateSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
            };
        case 'sprints/updateFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Sprints remove
        case 'sprints/removeRequest':
            return {
                ...state,
                action: action.type,
                loading: true,
                error: {},
            };
        case 'sprints/removeSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                sprints: state.sprints.filter(sprint => sprint.id !== action.id)
            };
        case 'sprints/removeFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Clear redux
        case 'sprints/clearSuccess':
            return {
                ...state,
                action: action.type
            };
        default:
            return state;
    }
}