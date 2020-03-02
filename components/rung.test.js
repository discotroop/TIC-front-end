import React from 'react';
import { render } from '@testing-library/react';
import Rung from './rung';
import { exportAllDeclaration } from '@babel/types';

test('Rung.text = passed string', () => {
    let tester = Rung("hello");
    expect(tester.text).toBe("hello");
});
