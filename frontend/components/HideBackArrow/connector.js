import { connect } from 'react-redux';
import {
  makeGetIsSwitchVisible,
} from '../../selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const makeMapStateToProps = () => {
  const getIsSwitchVisible = makeGetIsSwitchVisible();

  return (state, props) => ({
    isVisible: getIsSwitchVisible(state, props),
  });
};

export default connect(makeMapStateToProps, null);
