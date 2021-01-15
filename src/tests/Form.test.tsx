import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../components/Form';



describe('Should render Form component ',()=>{
  const props = {
    handleChange:jest.fn(),
    handleSubmit:jest.fn(),
    tags:{
      tag1:'',
      tag2:'',
      tag3:''
    }
  }
  it('render component',()=>{
    const component = shallow(<Form {...props}/>)
    expect(component).toMatchSnapshot();
  });
  it('inputs is rednder', () => {
    const component = shallow(<Form {...props}/>)
    const wrapper = component.find('FormControl')
    expect(wrapper).toHaveLength(3)
  });
});
