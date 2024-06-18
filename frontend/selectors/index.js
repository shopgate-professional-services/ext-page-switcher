import { createSelector } from 'reselect';
import { getCurrentRoute } from '@shopgate/engage/core';
import { SWITCH_WHITELIST, REDUX_NAMESPACE_SELECTION } from '../constants';

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
  extensionState => extensionState?.selection || {}
);
