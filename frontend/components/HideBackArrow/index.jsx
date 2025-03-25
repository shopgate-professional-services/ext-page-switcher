import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The HideBackArrow component.
 * @param {Object} props The component props.
 * @param {boolean} props.isSwitchVisible Determines if the back arrow should be hidden.
 * @returns {JSX.Element|null}
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
