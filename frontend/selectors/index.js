import { createSelector } from 'reselect';
import { getCurrentRoute } from '@shopgate/pwa-common/helpers/router';
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
 * Returns the selection
 * @param {Object} state .
 * @return {Object}
 */
export const getSelection = (state) => {
  if (!state.extensions[REDUX_NAMESPACE_SELECTION]?.selection) {
    return {};
  }
  return state.extensions[REDUX_NAMESPACE_SELECTION].selection;
};
