import React from 'react';

import { ImageList } from '../components/ImageList';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('Component should render right without tags', () => {
  const props = { images: [] };
  const component = shallow(
    <MemoryRouter initialEntries={['/abc']}>
      <ImageList {...props} />
    </MemoryRouter>,
  );
  expect(component.find('ImageList')).toMatchSnapshot();
});
