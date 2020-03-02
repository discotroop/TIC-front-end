import React from 'react';
import { render } from '@testing-library/react';
import Logic from './logic';

test('logic.laader initializes as empty array', () => {
    let sample = Logic();
    expect (sample.laader.length).toBe(0);
});

test('logic.laader holds new rungs pushed by logic.createRung()', () => {
    let sample = Logic();
    sample.createRung("hello");
    expect (sample.laader.length).toBe(1);
    expect (sample.laader[0].text).toBe("hello");
})