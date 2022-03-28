import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../services/actions';

function Post({ post, isFavorite }) {
  const dispatch = useDispatch();

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      {
        !isFavorite &&
        <button className='button' onClick={() => dispatch(addFavorite(post))}>Add to favorite</button>
      }
    </article>
  );
}

export default Post;
