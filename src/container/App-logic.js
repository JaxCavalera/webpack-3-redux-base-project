// This is where business logic for the App container component goes

// NPM Modules
import React from 'react';

// Components
import DemoComponent from '../components/DemoComponent/DemoComponent';

/**
 * Used to generate a collection of DemoComponents
 * with unique content based on the dataValue prop
 * @param {array} demoData - A list of text items
 * @return {element} - Collection of DemoComponents
 */
export const generateDemoInstances = (demoData) => {
    const Demos = demoData.map((item) => {
        return (
            <DemoComponent
                key={item}
                dataValue={item}
            />
        );
    });

    return Demos;
};
