// NPM Modules
import { takeLatest, put } from 'redux-saga';

// ActionTypes
import * as actionTypes from './DemoComponent-types';

/**
 * Some async generator (saga) for the DemoComponent
 * 
 * Because sagas are Higher order Functions that coordinate function calls,
 * all the functional logic used to process the response from a fetch request would be handled
 * inside a DemoComponent-saga-logic.js file (import * as sagaLogic).
 * 
 * This pattern keeps the declarative nature of HOF's readable separating What a saga does from HOW it does it.
 * 
 * @param {object} action - Action data (has a type and idValue)
 */
export function* getSomeData(action) {
    // Would have yielded an API function imported from DemoComponent-apis.js which is a pure fetch request
    yield console.log(action.idValue);
}

// Watchers for component specific generator functions (a.k.a sagas)
export function* demoSaga() {
    yield [
        takeLatest(actionTypes.GET_DATA_BY_ID, getSomeData),
    ];
}
