import { connect } from 'react-redux';
import { historyPush } from '@shopgate/pwa-common/actions/router'; // added
import {
  makeGetIsSwitchVisible,
  getSelection,
} from '../../selectors';
import { makeGetSelection } from '../../actions';

/**
 * Maps the contents of the state to the component props.
 * @param {Function} dispatch The dispatch method from the store.
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  openPage: pathname => dispatch(historyPush({
    pathname,
  })),
  setSelection: path => dispatch(makeGetSelection(path)),
});

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const makeMapStateToProps = () => {
  const getIsSwitchVisible = makeGetIsSwitchVisible();

  return (state, props) => ({
    isVisible: getIsSwitchVisible(state, props),
    selection: getSelection(state),
  });
};

export default connect(makeMapStateToProps, mapDispatchToProps); // added mapDispatchToProps
