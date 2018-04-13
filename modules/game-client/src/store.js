import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger({
    //empty options
});

import reducer from "./reducers";
const middleware = applyMiddleware(  promise(),  thunk, logger );
let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__){
     store = createStore(reducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
} else {
     store = createStore(reducer, middleware);
}

export default store
