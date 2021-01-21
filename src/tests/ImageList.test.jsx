import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { ImageList } from '../components/ImageList';

it('Component should render right without tags', () => {
  const props = { images: [] };
  const component = shallow(
    <MemoryRouter initialEntries={['/abc']}>
      <ImageList {...props} />
    </MemoryRouter>,
  );
  expect(component.find('ImageList')).toMatchSnapshot();
});
