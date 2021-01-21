import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../App';

describe('should render App component', () => {
  
  it('render App component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
