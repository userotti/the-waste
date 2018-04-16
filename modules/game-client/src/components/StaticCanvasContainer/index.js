import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import { spritesheetManager } from '../../singletons/SpritesheetManager'
import styled from 'styled-components';

const ContainerDiv = styled.div`
padding: 20px;
overflow: hidden;
position: absolute;
background-color: black;
bottom:0;
left:0;
top:0;
right: 0;
`
const StyledHeading = styled.h4`
color: yellow;
`

const StyledDetail = styled.p`
color: white;
`

const StyledCanvas = styled.canvas`

width:500px;
height:500px;
border-style: solid;
border-width: 5px;
border-color: yellow;
`



const mapStateToProps = (state) =>{
    return {

        creatures: state.sceneState.creatures,
        tileset: state.assetState.tilesetState,
        tilemap: state.assetState.mapState

    }
}

@connect(mapStateToProps)
class StaticCanvasContainer extends Component {

    componentDidMount() {

        window.addEventListener("resize", this.onResize.bind(this));
        this.onResize();

    }

    componentWillMount() {

        if (!this.props.tilemap.mapLoaded){
            this.props.dispatch(push('/loading'));
        }

    }


    componentWillUnmount() {

        window.removeEventListener("resize", this.onResize.bind(this));

    }

    componentDidUpdate() {
        this.updateCanvas();
    }


    onResize() {
        if (this.canvasElement){
            this.updateCanvasDimensions();
            this.updateCanvas(this.props);
        }
    }


    updateCanvasDimensions() {
        if (this.canvasElement){

            //Make fullscreen canvas, but we can do anything here.

            // Lookup the size the browser is displaying the canvas.
            var displayWidth  = document.documentElement.clientWidth;
            var displayHeight = document.documentElement.clientHeight;

            // Check if the canvas is not the same size.
            if (this.canvasElement.width  !== displayWidth || this.canvasElement.height !== displayHeight) {

                // Make the canvas the same size
                this.canvasElement.width  = displayWidth;
                this.canvasElement.height = displayHeight;


            }
        }
    }


    updateCanvas(props) {

        this.canvasElement.width  = 500;
        this.canvasElement.height = 500;

        const ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0,0, this.canvasElement.width, this.canvasElement.height);

        let mapObject = props.tilemap.map;
        let tilesetObject = props.tileset;

        console.log("mapObject", mapObject);
        console.log("tilesetObject", tilesetObject);
        console.log("mapObject.layers[0].data", mapObject.layers[0].data);


        let spritesheet = spritesheetManager.currentSpritesheet;
        for (let [index, tileId] of mapObject.layers[0].data.entries()){
            // console.log("index: ", index);
            // console.log("tileId: ", tileId);
            // console.log("index: ", index);
            // console.log("tileId: ", tileId);



            this.drawTile(ctx, spritesheet, {
                xPositionInSpritesheet: ((tileId % (tilesetObject.tileset.imagewidth/tilesetObject.tileset.tilewidth)) - 1)  * tilesetObject.tileset.tilewidth,
                yPositionInSpritesheet: (Math.floor(tileId / (tilesetObject.tileset.imagewidth/tilesetObject.tileset.tileheight))) * tilesetObject.tileset.tileheight,
                widthOfTileInSpritesheet: tilesetObject.tileset.tilewidth,
                heightOfTileInSpritesheet: tilesetObject.tileset.tileheight,
                xPositionOnCanvas: (index % mapObject.layers[0].width) * tilesetObject.tileset.tilewidth,
                yPositionOnCanvas: (Math.floor(index / mapObject.layers[0].height)) * tilesetObject.tileset.tileheight,
                widthOfTileOnCanvas: tilesetObject.tileset.tilewidth,
                heightOfTileOnCanvas: tilesetObject.tileset.tileheight
            })
        }

    }

    drawTile(ctx, spritesheet, drawDetails){

        // console.log("drawDetails: ", drawDetails);

        ctx.drawImage(spritesheet, drawDetails.xPositionInSpritesheet, drawDetails.yPositionInSpritesheet, drawDetails.widthOfTileInSpritesheet, drawDetails.heightOfTileInSpritesheet, drawDetails.xPositionOnCanvas, drawDetails.yPositionOnCanvas, drawDetails.widthOfTileOnCanvas, drawDetails.heightOfTileOnCanvas);

    }

    render() {
        return (
            <ContainerDiv>
                <StyledHeading>Canvas:</StyledHeading>
                <StyledDetail> This canvas only redraws when we recieve new state from the server. </StyledDetail>
                <StyledCanvas innerRef={(canvas) => { this.canvasElement = canvas }} />
            </ContainerDiv>
        );
    }
}

export default StaticCanvasContainer;
