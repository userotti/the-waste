import { combineReducers } from 'redux';
import tilesetReducer from './tilesetReducer';
import mapReducer from './mapReducer';


export default combineReducers({
    tilesetState: tilesetReducer,
    mapState: mapReducer,
});
