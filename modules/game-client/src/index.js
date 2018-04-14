import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import history from './singletons/History'
import { store } from './store';
import { Route } from 'react-router';

import CanvasContainer from './components/CanvasContainer'
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/loading" component={LoadingScreen}/>
                <Route path="/canvas" component={CanvasContainer}/>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('app'));
registerServiceWorker();
