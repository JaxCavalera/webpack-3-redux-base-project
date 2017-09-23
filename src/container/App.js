// NPM Modules
import React, { Component } from 'react';

// Styles
import './App.css';

// Logic
import * as logic from './App-logic';

// Constants
import * as constants from './App-constants';

export default class App extends Component {
    render() {
        return (
            <div className="bemprefix__app">
                <span>App Components or Routing Goes Here</span>
                <div className="bemprefix__app-demo-wrapper">
                    {logic.generateDemoInstances(['this', 'is', 'some', 'demo', 'data'])}
                </div>
            </div>
        );
    }
}

/*
Reference for if React Router were implemented
// NPM Modules
import { Route, Router, IndexRoute } from 'react-router';
import React, { Component } from 'react';
import { browserHistory } from 'history';

// Page layouts
import Home from '../pages/Home/Home';
import Test from '../components/Test/Test';

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <IndexRoute component={Home} />
                <Route path='/test-only' component={Test} />
            </Router>
        );
    }
}
*/
