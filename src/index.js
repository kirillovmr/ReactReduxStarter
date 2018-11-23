import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { logger } from './middleware';

const createStoreWithMiddleware = applyMiddleware(/* logger */)(createStore);
const store = createStoreWithMiddleware(reducers);

store.subscribe(() => {
  // console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));