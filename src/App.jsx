import React from 'react';
import Posts from './components/posts';
import Favorites from './components/favorites';
import { Provider } from 'react-redux';
import configureStore from './services/store';

const store = configureStore();

function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <div className="content">
        <Favorites />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
