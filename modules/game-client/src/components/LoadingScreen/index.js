import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapFetchData,
    tilesetFetchData,
    spritesheetIsLoading,
    spritesheetFetchData,
    spritesheetHasErrored,
    tilesetHasErrored,
    mapHasErrored,

    spritesheetFetchDataSuccess,
    setTilesetFileLocation,
    setSpritesheetFileLocation,
    setMapFileLocation,

    tilesetLoaded,
    spritesheetLoaded,
    mapLoaded

  } from '../../actions/assetActions'
import { spritesheetManager } from '../../singletons/SpritesheetManager'



import styled from 'styled-components';

const mapStateToProps = (state) =>{
    return {
        ...state
    }
}


const LoadingText = styled.h1`
color: white;
`

const InputContainer = styled.div`
background-color: white;
padding: 50px;
`
const StyledInput = styled.input`
margin: 10px;
width: 300px;
`

const StyledLabel = styled.label`

`


@connect(mapStateToProps)
class LoadingScreen extends Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {



    }



    loadAssets = (e) => {

        e.preventDefault();
        this.props.dispatch(tilesetHasErrored(false));
        this.props.dispatch(spritesheetHasErrored(false));
        this.props.dispatch(mapHasErrored(false));

        this.props.dispatch(tilesetLoaded(false));
        this.props.dispatch(spritesheetLoaded(false));
        this.props.dispatch(mapLoaded(false));

        setTimeout(()=>{
            this.props.dispatch(tilesetFetchData(this.props.assetState.fileLocations.tilesetFileLocation));
        }, 1000);

        setTimeout(()=>{
            this.props.dispatch(mapFetchData(this.props.assetState.fileLocations.mapFileLocation));
        }, 500);

        setTimeout(()=>{

            //This function is here so I can have reference to the image
            const imageSource = this.props.assetState.fileLocations.spritesheetFileLocation;
            this.props.dispatch(spritesheetFetchData((dispatch) => {

                dispatch(spritesheetIsLoading(true));

                spritesheetManager.loadSpritesheet(imageSource).then(()=>{
                    console.log("in then: ");
                    dispatch(spritesheetFetchDataSuccess());
                }).catch(()=>{
                    console.log("in catch: ");
                    dispatch(spritesheetHasErrored(true));
                });

            }));

        }, 1200);


    }

    tilesetLoadedLabel() {
        if (this.props.assetState.tilesetState.tilesetHasErrored){
            return <b> Error </b>
        }
        return this.props.assetState.tilesetState.tilesetLoaded ? <span> loaded! </span> : null;
    }

    spritesheetLoadedLabel() {
        if (this.props.assetState.spritesheetState.spritesheetHasErrored){
            return <b> Error </b>
        }
        return this.props.assetState.spritesheetState.spritesheetLoaded ? <span> loaded! </span> : null;
    }

    mapLoadedLabel() {
        if (this.props.assetState.mapState.mapHasErrored){
            return <b> Error </b>
        }
        return this.props.assetState.mapState.mapLoaded ? <span> loaded! </span> : null;
    }

    render() {

        return (
            <InputContainer>
                <form onSubmit={(e) => this.loadAssets(e)}>
                    <label>Tileset file location</label>
                    <StyledInput value={this.props.assetState.fileLocations.tilesetFileLocation} onChange={(evt) => this.props.dispatch(setTilesetFileLocation(evt.target.value))} autofocus/>
                    {this.tilesetLoadedLabel()}
                    <br/>

                    <label>Spritesheet file location</label>
                    <StyledInput value={this.props.assetState.fileLocations.spritesheetFileLocation}  onChange={(evt) => this.props.dispatch(setSpritesheetFileLocation(evt.target.value))}/>
                    {this.spritesheetLoadedLabel()}
                    <br/>

                    <label>Map file location</label>
                    <StyledInput value={this.props.assetState.fileLocations.mapFileLocation}  onChange={(evt) => this.props.dispatch(setMapFileLocation(evt.target.value))}/>
                    {this.mapLoadedLabel()}
                    <br/>

                    <button> Load Assets and goto canvas screen </button>
                </form>


            </InputContainer>
        );
    }
}

export default LoadingScreen;
