import React from 'react';
import { useSelector } from 'react-redux';

import Post from './post';

function Posts() {
  const { loading, data, hasErrors } = useSelector((state) => state.posts);

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
