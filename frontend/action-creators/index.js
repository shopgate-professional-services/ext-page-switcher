import {
  REQUEST_SELECTION,
  RECEIVE_SELECTION,
  SET_SELECTION,
  ERROR_SELECTION,
} from '../constants';

/**
 * Start selection request
 * @return {Object}
 */
export const requestSelection = () => ({
  type: REQUEST_SELECTION,
});

/**
 * Recieve selection
 * @param {Object} selection .
 * @return {Object}
 */
export const receiveSelection = selection => ({
  type: RECEIVE_SELECTION,
  selection,
});

/**
 * Set selection
 * @param {Object} selection .
 * @return {Object}
 */
export const setSelection = selection => ({
  type: SET_SELECTION,
  selection,
});

/**
 * Error selection
 * @param {Object} error .
 * @return {Object}
 */
export const errorSelection = error => ({
  type: ERROR_SELECTION,
  error,
});
