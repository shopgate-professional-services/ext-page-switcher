import { connect } from 'react-redux';
import { getSelection } from '../../../selectors';
import { makeUpdateSelection } from '../../../actions';

/**
 * Maps the contents of the state to the component props.
 * @param {Function} dispatch The dispatch method from the store.
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  setSelection: path => dispatch(makeUpdateSelection(path)),
});

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const makeMapStateToProps = state => ({
  isSelected: getSelection(state),
});

export default connect(makeMapStateToProps, mapDispatchToProps);
