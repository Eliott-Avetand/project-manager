const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    action: '',
    loading: false,
    error: {},
    userInfos: user ?
    {
        ...user,
        loggedIn: true
    } : {
        loggedIn: false
    },
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
                error: action.error,
                user: {}
            };
        default:
            return state;
    }
}