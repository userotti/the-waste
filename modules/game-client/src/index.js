import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import history from './singletons/History'
import { store } from './store';
import { Route } from 'react-router';

import AnimatingCanvasContainer from './components/AnimatingCanvasContainer'
import StaticCanvasContainer from './components/StaticCanvasContainer/staticCanvasContainer'
import ThreeJSCanvasContainer from './components/ThreeJSCanvasContainer'

import LoadingScreen from './components/LoadingScreen/loadingScreen'
import Home from './components/Home'


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={LoadingScreen}/>
                <Route path="/lobby" component={LoadingScreen}/>
                <Route path="/static-canvas" component={StaticCanvasContainer}/>
                <Route path="/animating-canvas" component={AnimatingCanvasContainer}/>
                <Route path="/threejs-canvas" component={ThreeJSCanvasContainer}/>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('app'));
registerServiceWorker();
