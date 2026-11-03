import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRoute } from '@shopgate/engage/core';
import { makeGetIsSwitchVisible } from '../../selectors';

/**
 * The HideBackArrow component.
 * @param {Object} props The component props.
 * @returns {JSX.Element|null}
 */
const HideBackArrow = ({ children }) => {
  const getIsSwitchVisible = useMemo(() => makeGetIsSwitchVisible(), []);
  const isSwitchVisible = useSelector(getIsSwitchVisible);

  // hiding the back arrow on pages where the switcher is visible
  return isSwitchVisible ? null : children;
};

HideBackArrow.propTypes = {
  children: PropTypes.node,
};

HideBackArrow.defaultProps = {
  children: null,
};

export default withRoute(HideBackArrow, { prop: 'route' });
