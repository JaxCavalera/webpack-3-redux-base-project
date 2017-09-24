// NPM Modules
import { combineReducers } from 'redux';

// Component reducers
import { demoReducer } from './components/DemoComponent/DemoComponent-reducer';

export default combineReducers({
    demoState: demoReducer,
});
