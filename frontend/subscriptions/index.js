import {
  main$,
  appDidStart$,
  navigate$,
  historyPush,
  getCurrentRoute,
  INDEX_PATH,
} from '@shopgate/engage/core';
import { logger } from '@shopgate/pwa-core/helpers';
import { getSelection } from '../selectors';
import { makeGetSelection } from '../actions';

export default (subscribe) => {
  const setSwitchSelection$ = main$.filter(({ action }) => action.type === 'SET_SWITCH_SELECTION');
  const indexDidEnter$ = navigate$.filter(({ action }) => action.params.pathname === INDEX_PATH);

  subscribe(indexDidEnter$, ({ dispatch, getState }) => {
    const state = getState();
    const selection = getSelection(state);
    const route = getCurrentRoute(state);

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

  subscribe(appDidStart$, ({ dispatch, getState }) => {
    const selection = getSelection(getState());

    try {
      dispatch(makeGetSelection(selection));
    } catch (e) {
      logger.error('Could not get selection.', e);
    }
  });
};
