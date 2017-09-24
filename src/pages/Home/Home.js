// NPM Modules
import React, { Component } from 'react';

// Styles
import './Home.css';

// Logic
import * as logic from './Home-logic';

export default class Home extends Component {
    render() {
        return (
            <div className="bemprefix__home">
                <div className="bemprefix__home-demos-wrapper">
                    {logic.generateDemoInstances(['here', 'is', 'some', 'demo', 'data'])}
                </div>
            </div>
        );
    }
}
