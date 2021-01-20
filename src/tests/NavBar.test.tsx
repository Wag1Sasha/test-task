import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from '../components/NavBar';

test('Render NavBar component', () => {
  const component = shallow(<NavBar />);
  expect(component).toMatchSnapshot();
});
