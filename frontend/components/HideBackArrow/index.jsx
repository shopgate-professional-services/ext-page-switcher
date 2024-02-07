import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The HideBackArrow component
 * @returns {JSX}
 */
const HideBackArrow = ({ isSwitchVisible, children }) => (
  // hiding the back arrow on pages where the switcher is visible
  isSwitchVisible ? null : children
);

HideBackArrow.propTypes = {
  isSwitchVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

HideBackArrow.defaultProps = {
  children: null,
};

export default withRoute(connect(HideBackArrow), { prop: 'route' });
