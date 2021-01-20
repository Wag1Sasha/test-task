import { tagsReducer } from '../redux/reducers/tagsReducer';
import { deleteTag, eventSubmit } from '../redux/actions';
import * as types from '../redux/types';

describe('tags reducer', () => {
  it('should create a tag in store', () => {
    const text = { text: 'text', id: 'text' };
    const expectedAction = {
      type: types.EVENT_SUBMIT,
      payload: text,
    };
    expect(tagsReducer({ tags: [] }, expectedAction)).toEqual(tagsReducer({ tags: [] }, eventSubmit(text)));
  });
  it('should delete a tag from store', () => {
    const i = 0;
    const expectedAction = {
      type: types.DELETE_TAG,
      payload: i,
    };
    expect(tagsReducer({ tags: [{ text: 'text', id: 'text' }] }, expectedAction)).toEqual(
      tagsReducer({ tags: [] }, deleteTag(i)),
    );
  });
});
