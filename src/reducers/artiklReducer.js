import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const initialState = []
const addArtikl = createSlice({
    name: 'artikl',
    initialState,
    reducers: {
        newArtikl(state= initialState, action){
            switch (action.payload.type) {
                case 'add':

                  console.log('state',state);
                    console.log('action payload', action.payload.payload);
                
                 state = [...state, action.payload.payload]
                 return state
             
                case 'remove':
                   
                  return state.filter(elem => elem.Model_Naslov !== action.payload.payload)
                 
                  
                  default: 
                  console.log("switch case inside fav reducer is defaulting action is:",action);
                  return state
            }
        }
    }
})

export const {newArtikl} = addArtikl.actions
export default addArtikl.reducer