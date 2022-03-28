import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
import { customMiddleware } from './middlewares';
import { requestor } from './httpRequestor';

const configureStore = (initialState) => {
  const initRequestor = requestor;
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument({initRequestor}),
        customMiddleware({initRequestor}),
      ),
    ),
  );
  return store;
};

export default configureStore;
