import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '../services/actions';

import Post from './post';

function Posts() {
  const dispatch = useDispatch();
  const { loading, data, hasErrors } = useSelector((state) => state.posts);
  console.log('render posts')
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section>
      <h1>Posts</h1>
      {loading && (<p>Loading posts...</p>)}
      {hasErrors && (<p>Unable to display posts.</p>)}
      {data.map((post) => <Post key={post.id} post={post} />)}
    </section>
  );
}

export default Posts;
