/*import { configureStore } from '@reduxjs/toolkit'
//import {createStore} from 'redux'
import addFavoriteReducer from './reducers/favoritesReducer'
//import addArticlesReducer from './reducers/artiklReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
*/

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to local storage for web

import rootReducer from './reducers/reducers.js'

const persistConfig = {
  key: 'root', // Key for the persisted state
  storage, // Storage engine to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);


/*
const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, addFavoriteReducer)

  
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
      middleware: [thunk]
})

export const persistor = persistStore(store)*/