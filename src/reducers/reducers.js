import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import addArtiklReducer from './artiklReducer'
import addFavoriteReducer from './favoritesReducer'; // Example reducer
// Import other reducers as needed

const rootReducer = combineReducers({
  favorite: addFavoriteReducer,
  artikl: addArtiklReducer // Example reducer
  // Add other reducers here
});

export default rootReducer;
