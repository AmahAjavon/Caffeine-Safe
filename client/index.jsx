// React dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';

// Import current root state of the application via reducers,
import reducers from './reducers/index.js'

// Import scenes.
import routes from './routes/index.jsx';

// Create store for state management.
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
);

// Application history. Routes, etc.
const history = createBrowserHistory();

// Render application.
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes(store)}</Router>
  </Provider>,
  document.getElementById('application')
);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

// Exporting history for redirects.
export default history;
