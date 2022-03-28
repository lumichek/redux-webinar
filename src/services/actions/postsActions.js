import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../action-types';

export const getPosts = () => ({
  type: GET_POSTS,
});
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export function fetchPosts() {
  return async (dispatch, getState, {initRequestor}) => {
    dispatch(getPosts());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
