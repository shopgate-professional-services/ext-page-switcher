import {
  main$,
  appWillStart$,
  appWillInit$,
  historyPush,
  INDEX_PATH,
  appInitialization,
  redirects,
} from '@shopgate/engage/core';
import { getSelection } from '../selectors';
import { SET_SELECTION } from '../constants';

const baseUrlRegex = /https?:\/\/(?:(?:(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?::[0-9]+)?)|(?:.+index.html))/gm;

/**
 * Helper to retrieve the base url of the webview
 * @returns {string}
 */
const getBaseUrl = () => {
  const [basedUrl = ''] = window.location.href.match(baseUrlRegex) || [];
  return basedUrl;
};

export default (subscribe) => {
  const setSwitchSelection$ = main$.filter(({ action }) => action.type === SET_SELECTION);

  subscribe(appWillInit$, ({ getState }) => {
    /**
     * Register an appInitialization callback that takes care that initial route of the app
     * is always the path from the selection.
     */
    appInitialization.set('ext-page-switcher', () => {
      const selection = getSelection(getState());
      if (selection?.path !== INDEX_PATH) {
        window.history.replaceState({}, null, `${getBaseUrl()}${selection.path}`);
      }
    });
  });

  subscribe(appWillStart$, ({ getState }) => {
    /**
     * Register a redirect for the index path that always leads to the path of the current selection
     */
    redirects.set(INDEX_PATH, () => {
      const selection = getSelection(getState());

      return selection.path;
    });
  });

  subscribe(setSwitchSelection$, ({ dispatch, getState }) => {
    const selection = getSelection(getState());

    dispatch(historyPush({
      pathname: selection.path,
    }));
  });
};

