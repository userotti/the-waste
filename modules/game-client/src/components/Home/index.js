import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import styled from 'styled-components';

const mapStateToProps = (state) =>{
    return {
        ...state
    }
}


const LoadingText = styled.h1`
color: white;
`

@connect(mapStateToProps)
class Home extends Component {

    componentDidMount() {
        this.props.dispatch(push('/loading'));
    }

    componentWillUnmount() {

    }

    componentDidUpdate() {


    }

    render() {

        return (
            <div>
                <h1> Home </h1>
            </div>
        );

    }
}

export default Home;
