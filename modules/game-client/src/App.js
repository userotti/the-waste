import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSomething } from './actions'
import CanvasContainer from './components/CanvasContainer'
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'

import { Route } from 'react-router';
import { push } from 'react-router-redux';
import styled from 'styled-components';



@connect((state)=>{
    return {
        ...state
    };
})
class App extends Component {

    componentWillUnmount() {

    }

    componentWillMount() {
        // this.props.dispatch(push('/loading'));
    }

    componentDidMount() {

    }

    render() {
        return <div>

        </div>
    }
}

export default App;
