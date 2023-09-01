import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const initialState = []
const addFavorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        newFavorite(state= initialState, action){
            switch (action.payload.type) {
                case 'add':

                  console.log('state',state);
                    console.log('action payload', action.payload.payload);
                
                 state = [...state, action.payload.payload]
                 return state
             
                case 'remove':
                   
                   return state.filter(elem => elem.Model_Naslov !== action.payload.payload)
                 /*   console.log('new im inside reducer', im);
                    return im;*/
                  
                  default: 
                  console.log("switch case inside fav reducer is defaulting action is:",action);
                  return state
            }
        }
    }
})

export const {newFavorite} = addFavorite.actions
export default addFavorite.reducer