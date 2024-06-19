import { connect } from 'react-redux';
import { setSelection } from '../../../action-creators';

/**
 * Maps the contents of the state to the component props.
 * @param {Function} dispatch The dispatch method from the store.
 * @return {Object}
 */
const mapDispatchToProps = {
  setSelection,
};

export default connect(null, mapDispatchToProps);
