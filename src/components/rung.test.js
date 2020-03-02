import React from 'react';
import { render } from '@testing-library/react';
import Rung from './rung';

test('Rung.text = passed string', () => {
    let tester = Rung("hello");
    expect(tester.text).toBe("hello");
});

test('Rung.time =  utc passed string', () => {
    // should actually write test to see what time it actually is but this is 
    // fine for now
    let tester = Rung("hello");
    let result = false;
    if (typeof tester.time === 'string') {
        result = true;
    }
    expect(result).toBe(true);
});
