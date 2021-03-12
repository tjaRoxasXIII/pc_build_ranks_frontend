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

function checkLogin() {
  const token = localStorage.getItem('token')
  if (token) {
    fetch('http://localhost:3000/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
              store.dispatch({
                type: 'SIGN_IN',
                payload: data
              })
            })
  }
}

ReactDOM.render(
  <Provider store={store}>
    {checkLogin()}
    <App />
  </Provider>,
  document.getElementById('root')
);
