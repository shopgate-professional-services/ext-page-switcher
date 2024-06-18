import { createSelector } from 'reselect';
import { getCurrentRoute } from '@shopgate/engage/core';
import { SWITCH_WHITELIST, REDUX_NAMESPACE_SELECTION } from '../constants';
import { pageLinking } from '../config';

/**
 * Creates a selector that determines whether the switch should be visible
 * @returns {Function}
 */
export const makeGetIsSwitchVisible = () => createSelector(
  getCurrentRoute,
  route => SWITCH_WHITELIST.includes(route.pathname)
);

/**
 * Get the Redux sub-state of the extension
 * @param {Object} state Redux state
 * @returns {Function}
 */
export const getExtensionState = state => state?.extensions[REDUX_NAMESPACE_SELECTION];

/**
 * Returns the selection
 * @param {Object} state .
 * @return {Object}
 */
export const getSelection = createSelector(
  getExtensionState,
  (extensionState) => {
    const cachedSelection = extensionState?.selection;
    const isConfigured = pageLinking.some(({ path }) =>
      (Object.keys(cachedSelection).length > 0
        ? path === cachedSelection?.path
        : false));

    // first start or the cached selection is not configured
    if (!cachedSelection || !isConfigured) {
      let selection = pageLinking.find(({ path }) => path === '/');

      // missing or wrong config
      if (!selection) {
        selection = {
          label: null,
          categoryId: null,
          path: '/',
        };
      }

      return selection;
    }

    return extensionState?.selection || {};
  }
);
