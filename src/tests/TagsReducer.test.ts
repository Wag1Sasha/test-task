import {tagsReducer} from '../redux/reducers/tagsReducer';
import {deleteTag , eventSubmit} from '../redux/actions';
import * as types from '../redux/types'

  describe('tags reducer', () => {
    it('should create a tag in store', () => {
      const text = {tag1:'text',tag2:'',tag3:''}
      const expectedAction = ({
        type:types.EVENT_SUBMIT,
        payload:{tags:[text.tag1]}
      })
      expect(tagsReducer({lastTags:[]},expectedAction)).toEqual(tagsReducer({lastTags:[]},eventSubmit(text)))
    });
    it('should delete a tag from store', () => {
      const i = 0
      const expectedAction = ({
        type:types.DELETE_TAG,
        payload:i
      })
      expect(tagsReducer({lastTags:['Tag']},expectedAction)).toEqual(tagsReducer({lastTags:[]},deleteTag(i)))
    });
});