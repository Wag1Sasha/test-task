import { ImageList } from '../components/ImageList';
import { shallow } from 'enzyme';


describe('TagsList component should render right' , () => {
  it('Component should render right with tags',()=>{
    const props = { images: [
      {largeImageURL:'http://image.com/png'},{largeImageURL:'http://image.com/png'},{largeImageURL:'http://image.com/png'}
    ]};
    const component = shallow(<ImageList {...props} />)
      expect(component).toMatchSnapshot();
  });
  it('Component should render right without tags', ()=>{
    const props = {images:[]}
    const component = shallow(<ImageList {...props} />)
    expect(component.find('ImgContainer')).toHaveLength(0);
  });
});

