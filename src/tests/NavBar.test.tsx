import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from '../components/NavBar';

it('Render NavBar component', () => {
  const component = shallow(<NavBar />);
  expect(component).toMatchSnapshot();
});
