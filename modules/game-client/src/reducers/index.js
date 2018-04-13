import { combineReducers } from 'redux';
import testReducer from './testReducer';
import sceneReducer from './sceneReducer';

// import userReducer from './user'
// import scenesReducer from './scenes'
// import sessionReducer from './session'



//Add the the other reducer strutures
export default combineReducers({
    testState: testReducer,
    sceneState: sceneReducer
})
