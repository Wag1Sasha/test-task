import React from 'react';
import { shallow } from 'enzyme';
import { TagsList } from '../components/TagsList';


describe('Should render TagsList component ',()=>{
  
  it('Component should render right without tags',()=>{
    const props = {
      handleClick:jest.fn(),
      handleDelete:jest.fn(),
      tagsState:[]
    }
    const component = shallow(<TagsList {...props}/>)
    expect(component).toMatchSnapshot();
  });
  it('Component should render right with tags',()=>{
    const props = {
      handleClick:jest.fn(),
      handleDelete:jest.fn(),
      tagsState:['Tag1','Tag2','Tag3']
    }
    const component = shallow(<TagsList {...props}/>)
    expect(component).toMatchSnapshot();
  });
});
