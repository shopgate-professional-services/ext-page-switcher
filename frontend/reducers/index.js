import {
  SET_SWITCH_SELECTION,
  ERROR_SWITCH_SELECTION,
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
    case SET_SWITCH_SELECTION:
      return {
        ...state,
        selection: action.selection,
      };
    case ERROR_SWITCH_SELECTION:
      return {
        ...state,
        selection: {},
      };
    default:
      return state;
  }
};

export default SwitchSelection;
