import { ADD_FAVORITE, REMOVE_FAVORITE } from '../action-types';

export const initialState = {
  posts: [],
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
