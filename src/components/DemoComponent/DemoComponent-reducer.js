// Action Types
import * as actionTypes from './DemoComponent-types';

export const initialState = {
    testStateItem: 'placeholder',
};

export const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TEST_STATE_ITEM: {
            return {
                ...state,
                testStateItem: action.newTestStateItemValue,
            };
        }

        default:
            return state;
    }
};
