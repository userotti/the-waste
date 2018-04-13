import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapFetchData, tilesetFetchData } from '../../actions/assetActions'

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
class LoadingScreen extends Component {

    componentDidMount() {

        setTimeout(()=>{
            this.loadAssets();
        }, 2000);

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

    }

    loadAssets = () => {

        this.props.dispatch(tilesetFetchData('/static/assets/tiled/skellie.json'));
        // this.props.dispatch(mapFetchData('/static/assets/tiled/Sprite-0003.png'));

    }

    render() {
        console.log("render: LoadingScreen", this.props);
        return (
            <LoadingText> Loading </LoadingText>
        );
    }
}

export default LoadingScreen;
