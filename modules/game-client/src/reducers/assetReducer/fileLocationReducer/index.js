import { combineReducers } from 'redux';

function tilesetFileLocation(state = '/static/assets/playplay/tileset.json', action) {
    switch (action.type) {
        case 'TILESET_FILE_LOCATION':
            return action.payload;

        default:
            return state;
    }
}

function spritesheetFileLocation(state = '/static/assets/playplay/spritesheet.png', action) {
    switch (action.type) {
        case 'SPRITESHEET_FILE_LOCATION':
            return action.payload;
        default:
            return state;
    }
}

function mapFileLocation(state = '/static/assets/playplay/map.json', action) {
    switch (action.type) {
        case 'MAP_FILE_LOCATION':
            return action.payload;

        default:
            return state;
    }
}

export default combineReducers({
    tilesetFileLocation,
    spritesheetFileLocation,
    mapFileLocation,
});
