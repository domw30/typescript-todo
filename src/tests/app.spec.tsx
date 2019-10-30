import React from 'react';
import { render, mount } from 'enzyme';
import App from '../components/app';

describe('First component test with Enzyme', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
});

describe('First component snapshot test', () => {
  it('app should render correctly and match the snapshot', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('static rendering tests', () => {
  it('renders the heading Todo List', () => {
    const wrapper = render(<App />);
    expect(wrapper.text()).toContain('Todo List');
  });
});
