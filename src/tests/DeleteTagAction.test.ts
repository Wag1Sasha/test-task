import configureStore from 'redux-mock-store';
import * as selectActions from '../redux/ducks/TagsDucks';

describe('Delete Tag Action', () => {
  const mockStore = configureStore();
  const index = 1;
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it('Action-creator works right', () => {
    const expectedActions = [
      {
        type: 'TAGS/DELETE_TAG',
        payload: index,
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
