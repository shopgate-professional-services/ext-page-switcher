import {
  main$,
  appWillStart$,
  appWillInit$,
  historyReplace,
  INDEX_PATH,
  appInitialization,
  redirects,
  hasSGJavaScriptBridge,
} from '@shopgate/engage/core';
import { getSelection } from '../selectors';
import { SET_SELECTION } from '../constants';

export default (subscribe) => {
  const setSwitchSelection$ = main$.filter(({ action }) => action.type === SET_SELECTION);

  subscribe(appWillInit$, ({ getState }) => {
    appInitialization.set('ext-page-switcher', () => {
      const selection = getSelection(getState());
      if (selection?.path !== INDEX_PATH) {
        // When running inside a real app, we need to prefix the url, since otherwise invalid
        // urls could be created - trailing slashes are removed to guarantee valid paths.
        const urlPrefix = hasSGJavaScriptBridge() ? `${window.location.href}`.replace(/\/+$/, '') : '';
        window.history.replaceState({}, null, `${urlPrefix}${selection.path}`);
      }
    });
  });

  subscribe(appWillStart$, ({ getState }) => {
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
