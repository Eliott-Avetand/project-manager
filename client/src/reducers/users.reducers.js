const token = localStorage.getItem('token');

const initialState = {
    action: '',
    loading: false,
    error: {},
    users: [],
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
        // Create user
        case 'user/createRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'user/createSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                users: [...state.users, action.user]
            };
        case 'user/createFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // GetAll user
        case 'user/getAllRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'user/getAllSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                users: action.users
            };
        case 'user/getAllFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // setProfilePicture user
        case 'user/setProfilePictureRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'user/setProfilePictureSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                userInfos: { ...state.userInfos, picture: action.file }
            };
        case 'user/setProfilePictureFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
            };
        // getProfilePicture user
        case 'user/getProfilePictureRequest':
            return {
                ...state,
                action: action.type,
                loading: true
            };
        case 'user/getProfilePictureSuccess':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: {},
                userInfos: { ...state.userInfos, picture: action.file }
            };
        case 'user/getProfilePictureFailure':
            return {
                ...state,
                action: action.type,
                loading: false,
                error: action.error
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