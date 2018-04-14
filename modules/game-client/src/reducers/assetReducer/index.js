import { combineReducers } from 'redux';

import fileLocationReducer from './fileLocationReducer';
import tilesetReducer from './tilesetReducer';
import spritesheetReducer from './spritesheetReducer';
import mapReducer from './mapReducer';


export default combineReducers({
    fileLocations: fileLocationReducer,
    tilesetState: tilesetReducer,
    spritesheetState: spritesheetReducer,
    mapState: mapReducer
});
