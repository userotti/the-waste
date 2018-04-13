export function tilesetHasErrored(bool) {
    return {
        type: 'TILESET_HAS_ERRORED',
        hasErrored: bool
    };
}

export function tilesetIsLoading(bool) {
    return {
        type: 'TILESET_IS_LOADING',
        isLoading: bool
    };
}

export function tilesetFetchDataSuccess(tileset) {
    return {
        type: 'TILESET_FETCH_DATA_SUCCESS',
        tileset
    };
}

export function tilesetFetchData(url) {

    return (dispatch) => {

        dispatch(tilesetIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(tilesetIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((tileset) => dispatch(tilesetFetchDataSuccess(tileset)))
            .catch(() => dispatch(tilesetHasErrored(true)));
    };
}

export function mapHasErrored(bool) {
    return {
        type: 'MAP_HAS_ERRORED',
        hasErrored: bool
    };
}

export function mapIsLoading(bool) {
    return {
        type: 'MAP_IS_LOADING',
        isLoading: bool
    };
}

export function mapFetchDataSuccess(map) {
    return {
        type: 'MAP_FETCH_DATA_SUCCESS',
        map
    };
}

export function mapFetchData(url) {
    return (dispatch) => {
        dispatch(mapIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(mapIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((map) => dispatch(mapFetchDataSuccess(map)))
            .catch(() => dispatch(mapHasErrored(true)));
    };
}
