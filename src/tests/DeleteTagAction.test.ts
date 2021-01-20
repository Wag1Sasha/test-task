import configureStore from 'redux-mock-store';
import * as selectActions from '../redux/actions';

describe('Delete Tag Action', () => {
  const mockStore = configureStore();
  const store = mockStore();
  beforeEach(() => {
    store.clearActions();
  });
  const index = 1;
  it('Action-creator works right', () => {
    const expectedActions = [
      {
        type: 'TAGS/DELETE_TAG',
        payload: 1,
      },
    ];
    store.dispatch(selectActions.deleteTag(index));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('Render action-creator', () => {
    store.dispatch(selectActions.deleteTag(index));
    expect(store.getActions()).toMatchSnapshot();
  });
});
