// NPM Modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Styles
import './DemoComponent.css';

// Actions
import * as actionCreators from './DemoComponent-actions';

// Business logic
import * as logic from './DemoComponent-logic';

class DemoComponent extends Component {
    constructor(props) {
        super(props);

        this.actions = this.props.actions;
    }

    // Use methods over anonymous fn when currying actions or state into business logic
    callHandleTestStateItemUpdates = (e) => logic.handleTestStateItemUpdates(
        e,
        this.props.dataValue,
        this.props.demoComponentState.testStateItems,
        this.actions.updateTestStateItems,
    )

    render() {
        // Destructure state to reduce boilerplate
        const {
            testStateItems,
        } = this.props.demoComponentState;

        // Destructure injected props to reduce boilerplate
        const {
            dataValue,
        } = this.props;

        /*
            In order to prevent unnecessary re-renders of child components that are being instantiated in a parent:
            - disconnect the component *remove all redux boilerplate*
            If state is not consumed outside the instanced child component just use setState()

            When state for each instance of the child component is consumed elsewhere, then things get a little more complex:
            - Pass in the auto-dispatching Action from the parent into each child instance via props so their onChange handler can still work
            - Pass in the object that contains all dynamically added values for each child instance using props from the parent's mapped state
            - In the child component being instantiated, include the shouldComponentUpdate(nextProps, nextState) lifeCycle hook.
            - Compare if the current props value for each instance is the same as the new one coming in
            If nothing has changed for that instance, return false to avoid an unnecessary re-render

            n.b. This entire problem is automatically handled when using mobx keeping implementation much more straight forward.
        */
        console.log('Every instance of DemoComponent re-renders in redux if one changes a value since they all share a single node in the store');

        return (
            <div className="bemprefix__demo-component">
                <span>{`This is a test component with a data value of ${dataValue}.`}</span>
                <input type='text' value={logic.getTestStateItemValue(dataValue, testStateItems)} onChange={this.callHandleTestStateItemUpdates} />
            </div>
        );
    }
}

// Maps a sub-set of the rootReduced store to this component's this.props.demoComponentState
export const mapStateToProps = (state) => ({
    demoComponentState: state.demoState,
});

// Auto-Dispatch action creators - can just call an action directly now via this.props.actions.actionName()
export const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
});

// Connects the mapped section(s) of the store and auto-dispatching actions to this.props
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DemoComponent);
