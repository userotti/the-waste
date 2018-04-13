import { combineReducers } from 'redux';
import testReducer from './testReducer';
import sceneReducer from './sceneReducer';
import assetReducer from './assetReducer';


//Add the the other reducer strutures
export default combineReducers({
    assetState: assetReducer,
    testState: testReducer,
    sceneState: sceneReducer
})
