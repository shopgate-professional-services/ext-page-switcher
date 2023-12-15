import { PipelineRequest } from '@shopgate/engage/core';
import {
  setSwitchSelection,
  errorSwitchSelection,
} from '../action-creators';

/**
 * Get and update selection
 * @param {*} selection .
 * @returns {Object}
 */
export const makeGetSelection = selection => dispatch => new PipelineRequest('shopgate-project.getSelection')
  .setInput({ selection })
  .dispatch()
  .then(({ updatedSelection }) => {
    dispatch(setSwitchSelection(updatedSelection));
  })
  .catch(error => dispatch(errorSwitchSelection(error)));
