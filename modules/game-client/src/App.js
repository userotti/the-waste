import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSomething } from './actions'
import CanvasContainer from './components/CanvasContainer'
import LoadingScreen from './components/LoadingScreen'




import styled from 'styled-components';

const ContainerDiv = styled.div`
overflow: hidden;
position: absolute;
background-color: black;
bottom:0;
left:0;
top:0;
right: 0;
`

@connect((store)=>{
    return {
        ...store
    };
})
class App extends Component {

    componentWillUnmount() {

    }


    componentDidMount() {
        console.log("this.props: ", this.props)
    }



    // shouldComponentUpdate(props) {
    //     return false;
    // }

    render() {
        //
        // let LoadingScreen = <ContainerDiv>
        //     <LoadingScreen/>
        // </ContainerDiv>
        //
        // let CanvasScreen = <ContainerDiv>
        //     <CanvasContainer/>
        // </ContainerDiv>

        console.log("this.props: App js: Render:", this.props);



        if (this.props.assetState.tilesetState.tileset) {
            return <ContainerDiv><CanvasContainer /></ContainerDiv>;
        }
        return <ContainerDiv><LoadingScreen /></ContainerDiv>;
    }
}

export default App;

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { onResize } from './actions/resizeActions'
// import { setMenuDrawerState  } from './actions/uiStateActions'
//
// import MenuBurgerButton from './components/MenuBurgerButton';
// import MenuDrawer from './components/MenuDrawer';
// import InfoBar from './components/InfoBar';
// import HomeButton from './components/HomeButton';
// import styled from 'styled-components';
//
// import SettingsScene from './scenes/Settings';
// import PaytableScene from './scenes/Paytable';
//
// // import BetConsoleScene from './scenes/BetConsole';
// // import AutoPlayConsoleScene from './scenes/AutoPlayConsole';
//
// import bgImg from '../assets/scene-backgrounds/bgfruittile224x222.png' // relative path to image
//
//
// const ContainerDiv = styled.div`
//     overflow: hidden;
//     position: absolute;
//     background: url(${ bgImg });
//     bottom:0;
//     left:0;
//     top:0;
//     right: 0;
// `
//
//
// @connect((store)=>{
//     return {
//         uiState: store.uiState
//     };
// })
// class App extends Component {
//
//     handleResize(event) {
//         this.props.dispatch(onResize(event))
//     }
//
//     componentDidMount() {
//         window.addEventListener('resize', ::this.handleResize)
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener('resize', ::this.handleResize)
//     }
//
//     render() {
//         return (
//             <ContainerDiv>
//
//                 <SettingsScene></SettingsScene>
//                 <PaytableScene></PaytableScene>
//                 {/* <PaytableScene></PaytableScene>
//                 <BetConsoleScene></BetConsoleScene>
//                 <AutoPlayConsoleScene></AutoPlayConsoleScene> */}
//
//                 <MenuDrawer>
//                 </MenuDrawer>
//
//                 <MenuBurgerButton>
//                 </MenuBurgerButton>
//
//                 <HomeButton>
//                 </HomeButton>
//
//                 <InfoBar>
//                 </InfoBar>
//
//             </ContainerDiv>
//         );
//     }
// }
//
// export default App;
