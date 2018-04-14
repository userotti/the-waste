import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSomething } from './actions'
import CanvasContainer from './components/CanvasContainer'
import LoadingScreen from './components/LoadingScreen'

import styled from 'styled-components';



@connect((state)=>{
    return {
        ...state
    };
})
class App extends Component {

    componentWillUnmount() {

    }


    componentDidMount() {
        console.log("this.props: ", this.props)
    }

    render() {
        return <LoadingScreen/>;
    }
}

export default App;
