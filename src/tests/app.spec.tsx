import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/app';
import { TodoInput, TodoForm, TodoListItem } from '../styles/styles';

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
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toContain('Todo List');
  });
});

describe('App', () => {
  describe('when a user adds a Todo into the todo input', () => {
    it('should update the input value state property', () => {
      const mockPreventDefault = jest.fn();
      const wrapper = shallow(<App />);
      wrapper.find(TodoInput).simulate('change', {
        preventDefault: mockPreventDefault,
        target: { value: 'Test Todo' },
      });
      wrapper
        .find(TodoForm)
        .simulate('submit', { preventDefault: mockPreventDefault });

      const result = wrapper.find(TodoListItem).text();

      expect(result).toBe('Test Todo');
    });
  });
});
