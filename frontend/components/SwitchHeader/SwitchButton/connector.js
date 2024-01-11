import { connect } from 'react-redux';
import { updateSelection } from '../../../actions';

/**
 * Maps the contents of the state to the component props.
 * @param {Function} dispatch The dispatch method from the store.
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  setSelection: link => dispatch(updateSelection(link)),
});

export default connect(null, mapDispatchToProps);
