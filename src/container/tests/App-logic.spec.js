// Units to be tested
import {
    generateDemoInstances,
} from '../App-logic';

describe('Given generateDemoInstances(demoData) is called', () => {
    describe('When demoData is an empty array', () => {
        test('Then it will return an empty array', () => {
            const result = generateDemoInstances([]);
            expect(result).toEqual([]);
        });
    });

    describe('When demoData is an array of 2 text items', () => {
        test('Then it will return 2 instances of the DemoComponent', () => {
            const result = generateDemoInstances(['first', 'second']);
            const output = mount(<div>{result}</div>);

            expect(output.find('.bemprefix__demo-component')).toHaveLength(2);
        });
    });
});
