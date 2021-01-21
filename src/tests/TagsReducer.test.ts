import tagsReducer from '../redux/ducks/TagsDucks';
import * as selectActions from '../redux/ducks/TagsDucks';

describe('tags reducer', () => {
  it('should create a tag in store', () => {
    const text = { text: 'text', id: 'text' };
    const expectedAction = {
      type: 'TAGS/EVENT_SUBMIT',
      payload: text,
    };
    expect(tagsReducer({ tags: [] }, expectedAction)).toEqual(
      tagsReducer({ tags: [] }, selectActions.eventSubmit(text)),
    );
  });

  it('should delete a tag from store', () => {
    const i = 0;
    const expectedAction = {
      type: 'TAGS/DELETE_TAG',
      payload: i,
    };
    expect(tagsReducer({ tags: [{ text: 'text', id: 'text' }] }, expectedAction)).toEqual(
      tagsReducer({ tags: [] }, selectActions.deleteTag(i)),
    );
  });
});
