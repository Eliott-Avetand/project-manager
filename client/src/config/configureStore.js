import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';

import userReducer from '@reducers/users.reducers';
import sprintsReducer from '@reducers/sprints.reducer';
import cardsReducer from '@reducers/cards.reducer';

const reducer = combineReducers({
    userReducer: userReducer,
    sprintsReducer: sprintsReducer,
    cardsReducer: cardsReducer,
});

const preloadedState = {};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    preloadedState
});

export default store;