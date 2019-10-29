import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';
import renderer from 'react-test-renderer';
import Header from '../components/app';
import TodoForm from '../components/app';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
    // shallow assertion method. Igonres any child components. E.g. Header will be ignored.
    // A typed of unit test for React, designed to test one function.
    // smoke test. Verifies a component renders without crashing/throwing.
  });
});

describe('First Snapshot test', () => {
  it('app should render correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('should render header correctly', () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  });

  it('should render TodoForm correctly', () => {
    const todoForm = shallow(<TodoForm />);
    expect(todoForm).toMatchSnapshot();
  });
});
