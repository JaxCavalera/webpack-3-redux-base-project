// NPM Modules
import { fork } from 'redux-saga/effects'

// Component sagas
import demoSaga from './components/DemoComponent/DemoComponent-saga';

export default function* rootSaga() {
    yield [
        fork(demoSaga),
    ];
}
