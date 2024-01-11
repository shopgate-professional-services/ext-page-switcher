import {
  REQUEST_SELECTION,
  RECEIVE_SELECTION,
  SET_SELECTION,
  ERROR_SELECTION,
} from '../constants';

/**
 * SwitchSelection reducer.
 * @param {Object} state State.
 * @param {Object} action Action.
 * @returns {Object}
 */
const SwitchSelection = (
  state = {},
  action
) => {
  switch (action.type) {
    case REQUEST_SELECTION:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RECEIVE_SELECTION:
      return {
        ...state,
        loading: false,
        selection: action.selection,
      };
    case SET_SELECTION:
      return {
        ...state,
        selection: action.selection,
      };
    case ERROR_SELECTION:
      return {
        ...state,
        loading: false,
        error: {},
      };
    default:
      return state;
  }
};

export default SwitchSelection;
