// NPM Modules
import React from 'react';
import reactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Component
import App from './container/App';

// Boilerplate
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// Create the saga middleware here so we can run it and connect it to the store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

/**
 * Used to render out a copy of the react application (nested inside Component) to the targetDiv
 * @param {DOM node} targetDiv - The DOM node where the app is going to be rendered
 * @param {element} Component - Base container component that the application loads into
 */
const renderToTargetDiv = (targetDiv, Component) => {
    reactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        targetDiv,
    );
};

/**
 * Used to find all instances of a specific className and render a copy of the application to each of them
 * @param {string} appClassName - The DIV(s) class name to render the application into
 */
const findAndRenderToTarget = (appClassName) => {
    const classList = global.document.getElementsByClassName(appClassName);

    Array.prototype.forEach.call(classList, (currentDiv) => {
        renderToTargetDiv(currentDiv, App);

        // Hot Module Reloading - auto disables when in production
        if (module.hot) {
            module.hot.accept('./container/App', () => renderToTargetDiv(currentDiv, App));
        }
    });
};

// This is where it all starts
findAndRenderToTarget('appnamehere');
