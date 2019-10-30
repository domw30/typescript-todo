import React from 'react';
import { mount } from 'enzyme';
import App from '../components/app';

// shallow assertion method. Igonres any child components. E.g. Header will be ignored.
// A type of unit test for React, designed to test one function.
// smoke test. Verifies a component renders without crashing/throwing.

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
});

describe('First snapshot test', () => {
  it('app should render correctly and match the snapshot', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
