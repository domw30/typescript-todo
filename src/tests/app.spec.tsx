import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
    // shallow assertion method. Igonres any child components. E.g. Header will be ignored.
    // A typed of unit test for React, designed to test one function.
  });
});
