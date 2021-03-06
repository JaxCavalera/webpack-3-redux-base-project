// Action types
import * as actionTypes from './DemoComponent-types';

// Standard Actions - Synchronous use cases only
export const updateTestStateItems = (value) => ({
    type: actionTypes.UPDATE_TEST_STATE_ITEMS,
    newTestStateItems: value,
});

// Async Actions - Listened for by a Saga watcher and used to call API's or run other unknown duration based tasks
export const getDataById = (id) => ({
    type: actionTypes.GET_DATA_BY_ID,
    idValue: id,
});
