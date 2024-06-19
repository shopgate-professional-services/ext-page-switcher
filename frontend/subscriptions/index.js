import {
  main$,
  appWillStart$,
  appWillInit$,
  historyReplace,
  INDEX_PATH,
  appInitialization,
  redirects,
  historyReset,
} from '@shopgate/engage/core';
import { getSelection } from '../selectors';
import { SET_SELECTION } from '../constants';

export default (subscribe) => {
  const setSwitchSelection$ = main$.filter(({ action }) => action.type === SET_SELECTION);

  subscribe(appWillInit$, ({ getState }) => {
    appInitialization.set('ext-page-switcher', () => {
      const selection = getSelection(getState());
      if (selection?.path !== INDEX_PATH) {
        window.history.replaceState({}, null, selection.path);
      }
    });
  });

  subscribe(appWillStart$, ({ getState, dispatch }) => {
    window.sgHistoryReset = () => {
      dispatch(historyReset());
    };

    redirects.set(INDEX_PATH, () => {
      const selection = getSelection(getState());

      return selection.path;
    });
  });

  subscribe(setSwitchSelection$, ({ dispatch, getState }) => {
    const selection = getSelection(getState());

    dispatch(historyReplace({
      pathname: selection.path,
    }));
  });
};
