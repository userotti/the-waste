import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import loadingActions from '../../actions/assetActions/loading'

import {
  setTilesetJSONFileLocation,
  setTilesetSpritesheetFileLocation,
  setTilemapJSONFileLocation
} from '../../actions/assetActions/fileLocations'


import { createNewGame, newUserLanded } from '../../actions/socketActions'
import { assetManager } from '../../singletons/AssetManager'
import { push } from 'react-router-redux';
import styled from 'styled-components';


const { loadTilesetJSON, loadTilemapJSON, loadTilesetSpritesheet, allAssetsLoaded } = loadingActions;
console.log("loadTilesetJSON", loadTilesetJSON);

const Container = styled.div`
    padding: 20px;

    Input {
      width: 400px;
      margin-bottom: 10px;
    }

    Button {
      background-color: #00f;
      color: white;
      padding: 5px;
    }

`



class LoadingScreen extends Component {
  state = {
    loadingRequest: false,
    requestError: false,
    requestSuccess: false,
    errorMessage: '',
  }

  componentDidMount() {
    this.flushAssets();

  }

  componentWillUnmount() {

  }

  componentDidUpdate() {

    // if (this.props.assetState.spritesheetState.spritesheetLoaded
    //   && this.props.assetState.tilesetState.tilesetLoaded
    //   && this.props.assetState.mapState.mapLoaded){
    //
    //
    //
    //     this.props.dispatch(createNewGame({
    //       map: this.props.assetState.mapState.map,
    //       tileset: this.props.assetState.tilesetState.tileset
    //     }));
    //
    //     this.props.dispatch(push('/static-canvas'));
    //
    //   }

    // if (this.props.socketState.socketID){
    //   console.log("NOW we're talking to the server, this.props.socketState.socketID: ", this.props.socketState.socketID);
    // }

  }

  flushAssets() {


  }

  loadAssets = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {

        this.flushAssets();
        if (!err) {

            this.setState({
                loadingRequest: true,
                requestError: false
            })

            Promise.all([
              this.props.loadTilesetJSON(values.tilesetJSONLocation),
              this.props.loadTilesetSpritesheet(values.tilesetSpritesheetLocation),
              this.props.loadTilemapJSON(values.tilemapJSONLocation)
            ]).then((response)=>{

              this.props.allAssetsLoaded();
              this.props.push('/static-canvas');

            }).catch((err)=>{

              console.error("loading err", err);
              this.setState({
                  loadingRequest: false,
                  requestError: true
              })
            })
        }
    });



  }

  // tilesetLoadedLabel() {
  //   if (this.props.assetState.tilesetState.tilesetHasErrored){
  //     return <b> Error </b>
  //   }
  //   return this.props.assetState.tilesetState.tilesetLoaded ? <span> loaded! </span> : null;
  // }
  //
  // spritesheetLoadedLabel() {
  //   if (this.props.assetState.spritesheetState.spritesheetHasErrored){
  //     return <b> Error </b>
  //   }
  //   return this.props.assetState.spritesheetState.spritesheetLoaded ? <span> loaded! </span> : null;
  // }
  //
  // mapLoadedLabel() {
  //   if (this.props.assetState.mapState.mapHasErrored){
  //     return <b> Error </b>
  //   }
  //   return this.props.assetState.mapState.mapLoaded ? <span> loaded! </span> : null;
  // }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <Container>
        <Form layout="inline" onSubmit={(e) => this.loadAssets(e)}>
          <FormItem>
            {getFieldDecorator('tilesetJSONLocation', {
              rules: [{ required: false }],
              initialValue: this.props.tilesetJSONLocation,
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('tilesetSpritesheetLocation', {
              rules: [{ required: false }],
              initialValue: this.props.tilesetSpritesheetLocation,
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('tilemapJSONLocation', {
              rules: [{ required: false }],
              initialValue: this.props.tilemapJSONLocation,
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={false}
              autoFocus={true}

            >
              Load Assets
            </Button>
          </FormItem>

        </Form>
      </Container>



    );

  }
}

const WrappedLoadingScreen = Form.create()(LoadingScreen);

export default connect(
  state => ({
    tilesetJSONLocation: state.assetState.fileLocations.tilesetJSONLocation,
    tilesetSpritesheetLocation: state.assetState.fileLocations.tilesetSpritesheetLocation,
    tilemapJSONLocation: state.assetState.fileLocations.tilemapJSONLocation,

    tilesetJSON: state.assetState.tilesetJSON,
    tilesetImageLoaded: state.assetState.tilesetImage,
    tilemapJSON: state.assetState.tilemapJSON

  }),
  {
    loadTilesetJSON,
    loadTilemapJSON,
    loadTilesetSpritesheet,
    push,
    allAssetsLoaded
  }
)(WrappedLoadingScreen);
