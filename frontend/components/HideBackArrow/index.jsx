import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The HideBackArrow component
 * @returns {JSX}
 */
const HideBackArrow = ({ isVisible, children }) => (
  // hide back arrow on switch pages
  isVisible ? null : children
);

HideBackArrow.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

HideBackArrow.defaultProps = {
  children: null,
};

export default withRoute(connect(HideBackArrow), { prop: 'route' });
