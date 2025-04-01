import { connect } from 'react-redux';
import { makeGetIsSwitchVisible } from '../../selectors';

/**
 * Maps the contents of the state to the component props.
 * @return {Object} The extended component props.
 */
const makeMapStateToProps = () => {
  const getIsSwitchVisible = makeGetIsSwitchVisible();

  return (state, props) => ({
    isSwitchVisible: getIsSwitchVisible(state, props),
  });
};

export default connect(makeMapStateToProps, null);
