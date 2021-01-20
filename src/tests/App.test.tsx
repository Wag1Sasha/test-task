import { shallow } from 'enzyme';
import { App } from '../App';
import React from 'react';

describe('should render App component', () => {
  it('render App component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
