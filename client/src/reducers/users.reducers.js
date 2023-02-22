const token = localStorage.getItem('token');

const initialState = {
    action: '',
    loading: false,
    error: {},
    userInfos: token ? { loggedIn: true } : { loggedIn: false }
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        // Login user
        case 'user/loginRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'user/loginSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                userInfos: { ...action.user, loggedIn: true }
            };
        case 'user/loginFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // Logout user
        case 'user/logoutRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'user/logoutSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                userInfos: { ...state.userInfos, loggedIn: false }
            };
        // Clear redux
        case 'user/clearSuccess':
            return {
                ...state,
                action: action.type
            };
        default:
            return state;
    }
}