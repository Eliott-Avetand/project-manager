import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from '@reducers/users.reducers';

const reducer = {
    userReducer: userReducer,
}

const preloadedState = {};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    preloadedState
});

export default store;