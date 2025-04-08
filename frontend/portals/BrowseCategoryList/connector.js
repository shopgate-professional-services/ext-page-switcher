import { connect } from 'react-redux';
import { getCategoryChildren } from '@shopgate/pwa-common-commerce/category/selectors';
import { getSelection } from '../../selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state) => {
  const selection = getSelection(state);
  const { categoryId } = selection;

  return ({
    categories: getCategoryChildren(state, { categoryId }),
  });
};

export default connect(mapStateToProps);

