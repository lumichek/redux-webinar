import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../action-types';

export const initialState = {
  loading: false,
  hasErrors: false,
  data: {},
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
        hasErrors: false,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    default:
      return state;
  }
}
