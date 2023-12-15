import {
  SET_SWITCH_SELECTION,
  ERROR_SWITCH_SELECTION,
} from '../constants';

/**
 * @param {Object} selection .
 * @return {Object}
 */
export const setSwitchSelection = selection => ({
  type: SET_SWITCH_SELECTION,
  selection,
});

/**
 * @param {Error} error .
 * @return {Object}
 */
export const errorSwitchSelection = error => ({
  type: ERROR_SWITCH_SELECTION,
  error,
});
