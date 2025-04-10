import { connect } from 'react-redux';
import { makeGetIsSwitchVisible, getSelection } from '../../selectors';

/**
 * Maps the contents of the state to the component props.
 * @return {Object} The extended component props.
 */
const makeMapStateToProps = () => {
  const getIsSwitchVisible = makeGetIsSwitchVisible();

  return (state, props) => ({
    isVisible: getIsSwitchVisible(state, props),
    selection: getSelection(state),
  });
};

export default connect(makeMapStateToProps);
