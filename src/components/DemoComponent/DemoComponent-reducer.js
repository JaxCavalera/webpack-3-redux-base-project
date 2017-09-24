// Action Types
import * as actionTypes from './DemoComponent-types';

export const initialState = {
    testStateItems: {
        default: 'placeholder',
    },
};

export const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TEST_STATE_ITEMS: {
            return {
                ...state,
                testStateItems: action.newTestStateItems,
            };
        }

        default:
            return state;
    }
};
