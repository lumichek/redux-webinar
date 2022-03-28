import React from 'react';
import { useSelector } from 'react-redux';
import { favoritesSelector } from '../services/selectors/favoritesSelector';

import Post from './post';

function Favorites() {
  const favorites = useSelector(favoritesSelector);

  return (
    <section>
      <h1>Favorites</h1>
      {favorites.map((post) => <Post key={post.id} post={post} isFavorite={true} />)}
    </section>
  );
}

export default Favorites;
