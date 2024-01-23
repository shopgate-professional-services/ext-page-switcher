import {
  main$,
  appWillStart$,
  navigate$,
  historyPush,
  getCurrentRoute,
  INDEX_PATH,
} from '@shopgate/engage/core';
import { getSelection } from '../selectors';
import { fetchSelection, updateSelection } from '../actions';
import { SET_SELECTION } from '../constants';

export default (subscribe) => {
  const indexDidEnter$ = navigate$.filter(({ action }) => action.params.pathname === INDEX_PATH);
  const setSwitchSelection$ = main$.filter(({ action }) => action.type === SET_SELECTION);

  subscribe(indexDidEnter$, ({ dispatch, getState }) => {
    const state = getState();
    const selection = getSelection(state);
    const route = getCurrentRoute(state);

    // home button redirects to selection
    if (selection.path !== route.pathname) {
      dispatch(historyPush({
        pathname: selection.path,
      }));
    }
  });

  subscribe(setSwitchSelection$, ({ dispatch, getState }) => {
    const selection = getSelection(getState());

    dispatch(historyPush({
      pathname: selection.path,
    }));
  });

  subscribe(appWillStart$, async ({ dispatch, getState }) => {
    await dispatch(fetchSelection());
    const selection = getSelection(getState());

    dispatch(updateSelection(selection));
  });
};
