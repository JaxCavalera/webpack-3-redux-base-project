// NPM Modules
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';

// Page layouts
import Home from '../pages/Home/Home';
import DemoComponent from '../components/DemoComponent/DemoComponent';

// Styles
import './App.css';

/*
    NOTES:
    - Additional <Routes> can be defined inline on child components.
    - 'render' property on a Route is used to inject props.
    - path='*' would usually point to a "page not found" type component
*/
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='bemprefix__app'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/single' render={() => <DemoComponent dataValue='standaloneVersion' />} />
                        <Route render={() => <div>page not found or index.html is being ran directly on a computer instead of hosted so routes won't work</div>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
