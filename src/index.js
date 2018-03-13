//"use strict"
import React from 'react';
import { render } from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {  createStore , applyMiddleware } from 'redux';
import reducers from './reducers/index';
import  BooksList from './components/pages/booksList'

// STEP 1 create the store
const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
const store = createStoreWithMiddleware(reducers ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({serialize: true}) );


// const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({serialize: true}));
;

render(
    <Provider store={store}>
        <BooksList />
    </Provider>,
    document.getElementById('app')
);




