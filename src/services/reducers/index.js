import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  favorites: favoritesReducer
});

export default rootReducer;
