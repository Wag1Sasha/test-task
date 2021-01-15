import configureStore from 'redux-mock-store';

import * as selectActions from '../redux/actions';



describe('Event submit action-creator', () => {
  const mockStore = configureStore();
  const store = mockStore();
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  const tags = {tag1:"1", tag2:"2",tag3:'3'}
  describe('Event Submit Action', () => {
    it('Action-creator works correct', () => {
      const expectedActions = [
        {
          'type': "TAGS/EVENT_SUBMIT",
          'payload': {tags:['1','2','3']},
        },
      ];
      store.dispatch(selectActions.eventSubmit(tags));
      expect(store.getActions()).toEqual(expectedActions);
    });
      it('Render action-creator', () => {
        store.dispatch(selectActions.eventSubmit(tags));
        expect(store.getActions()).toMatchSnapshot();
      });
    });
});