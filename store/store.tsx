import { AppState } from './type.d';
import { combineReducers, Store } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    userReducer: userReducer,
    modalReducer: modalReducer,
});


export const store = configureStore({
      reducer:  rootReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false,
    })
})