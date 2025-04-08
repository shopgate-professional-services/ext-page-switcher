import {
  main$,
  appWillStart$,
  appWillInit$,
  historyReplace,
  INDEX_PATH,
  appInitialization,
  redirects,
} from '@shopgate/engage/core';
import { fetchCategory } from '@shopgate/engage/category';
import { getCategoryChildren } from '@shopgate/pwa-common-commerce/category/selectors';
import { getSelection } from '../selectors';
import { SET_SELECTION } from '../constants';
import { browseDidEnter$ } from '../streams';

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

    dispatch(historyReplace({
      pathname: selection.path,
    }));
  });

  subscribe(browseDidEnter$, ({ dispatch, getState }) => {
    const state = getState();
    const selection = getSelection(state);
    const { categoryId } = selection;
    const childCategories = getCategoryChildren(state, { categoryId });

    if (!childCategories) {
      dispatch(fetchCategory(categoryId));
    }
  });
};

