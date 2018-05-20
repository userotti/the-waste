import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import history from './singletons/History'
// import 'antd/dist/antd.css';

import AnimatingCanvasContainer from './components/AnimatingCanvasContainer'
import StaticCanvasContainer from './components/StaticCanvasContainer/staticCanvasContainer'
import ThreeJSCanvasContainer from './components/ThreeJSCanvasContainer'
import LoadingScreen from './components/LoadingScreen/loadingScreen'
import Home from './components/Home'

import { store } from './store';

class App extends Component {

    componentWillUnmount() {

    }

    componentWillMount() {
        // this.props.dispatch(push('/loading'));
    }

    componentDidMount() {

    }

    render() {
        return <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={LoadingScreen}/>
                    <Route path="/lobby" component={LoadingScreen}/>
                    <Route path="/static-canvas" component={StaticCanvasContainer}/>
                    <Route path="/animating-canvas" component={AnimatingCanvasContainer}/>
                    <Route path="/threejs-canvas" component={ThreeJSCanvasContainer}/>
                </div>
            </ConnectedRouter>
        </Provider>
    }
}

export default App;
