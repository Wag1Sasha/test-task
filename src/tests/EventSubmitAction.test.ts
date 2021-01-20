import configureStore from 'redux-mock-store';

import * as selectActions from '../redux/actions';

describe('Event submit action-creator', () => {
  const mockStore = configureStore();
  const store = mockStore();
  const tag = { text: 'text', id: 'text' };
  beforeEach(() => {
    store.clearActions();
  });
  it('Action-creator works correct', () => {
    const expectedActions = [
      {
        type: 'TAGS/EVENT_SUBMIT',
        payload: { text: 'text', id: 'text' },
      },
    ];
    store.dispatch(selectActions.eventSubmit(tag));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('Render action-creator', () => {
    store.dispatch(selectActions.eventSubmit(tag));
    expect(store.getActions()).toMatchSnapshot();
  });
});
