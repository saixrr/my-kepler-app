// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { keplerGlReducer } from 'kepler.gl/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(/* Add any additional middleware here if needed */)
});

export default store;
