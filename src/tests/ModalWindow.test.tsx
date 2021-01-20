import React from 'react';
import { shallow } from 'enzyme';
import { ModalWindow } from '../components/ModalWindow';

describe('Render ModalWindow component', () => {
  const props = {
    image: '/photos/image',
    show: true,
    handleClose: () => {},
  };
  it('Should render Modal', () => {
    const component = shallow(<ModalWindow {...props} />);
    expect(component).toMatchSnapshot();
  });
});
