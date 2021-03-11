import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import sessionReducer from './reducers/sessionReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
  sessionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
