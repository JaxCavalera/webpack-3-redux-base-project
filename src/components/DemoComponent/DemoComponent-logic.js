/**
 * Used to update the text inside the input field when a user changes it
 * @param {object} e - Event handler
 * @param {string} instanceId - Unique string to this instance of DemoComponent
 * @param {object} currentValue - Has the current input values for instances of DemoComponent
 * @param {function} updateTestStateItem - Action used to update the input value
 */
export const handleTestStateItemUpdates = (e, instanceId, currentValue, updateTestStateItems) => {
    const newValue = {
        ...currentValue,
        [instanceId]: e.target.value,
    };

    updateTestStateItems(newValue);
};

/**
 * Used to retrieve a dynamically generated state value
 * @param {string} instanceId - Unique string to this instance of DemoComponent
 * @param {object} testStateItem - Object containing a default and potentially a reference to the current instance
 * @return {string} - New input value to be used for the current instance of DemoComponent
 */
export const getTestStateItemValue = (instanceId, testStateItem) => {
    const currentValue = testStateItem[instanceId];

    if (typeof currentValue !== 'undefined') {
        return currentValue;
    }

    return testStateItem.default;
};
