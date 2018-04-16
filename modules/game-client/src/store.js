import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import history from './singletons/History';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducer from "./reducers";


// Build the middleware for intercepting and dispatching navigation actions
const router = routerMiddleware(history);
const logger = createLogger({
    //empty options
});
const middleware = applyMiddleware(  promise(),  thunk, router, logger );
let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__){

     store = createStore(reducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

} else {
     store = createStore(reducer, middleware);
}

export { store as store };
