import { PipelineRequest } from '@shopgate/engage/core';
import {
  requestSelection,
  receiveSelection,
  setSelection,
  errorSelection,
} from '../action-creators';

/**
 * Get start page selection
 * @return {Object}
 */
export const getStartpage = () => async (dispatch) => {
  dispatch(requestSelection());

  try {
    const { selection } = await new PipelineRequest('shopgate-project.getSelection').dispatch();
    dispatch(receiveSelection(selection));
  } catch (error) {
    dispatch(errorSelection(error));
  }
};

/**
 * Update selection
 * @param {*} newSelection .
 * @return {Object}
 */
export const updateSelection = newSelection => async (dispatch) => {
  try {
    await new PipelineRequest('shopgate-project.setSelection')
      .setInput({ newSelection })
      .dispatch();

    dispatch(setSelection(newSelection));
  } catch (error) {
    dispatch(errorSelection(error));
  }
};
