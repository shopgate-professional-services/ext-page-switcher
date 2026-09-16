import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRoute } from '@shopgate/engage/core';
import { makeGetIsSwitchVisible } from '../../selectors';

/**
 * The SwitchHomeTabBarAction component.
 * If a switch page is selected, the home icon is highlighted.
 * @param {Object} props The component props.
 * @returns {JSX.Element}
 */
const SwitchHomeTabBarAction = ({ children }) => {
  const getIsSwitchVisible = useMemo(() => makeGetIsSwitchVisible(), []);
  const isSwitchVisible = useSelector(getIsSwitchVisible);

  return isSwitchVisible
    ? React.cloneElement(children, { isHighlighted: true })
    : children;
};

SwitchHomeTabBarAction.propTypes = {
  children: PropTypes.node,
};

SwitchHomeTabBarAction.defaultProps = {
  children: null,
};

export default withRoute(SwitchHomeTabBarAction, { prop: 'route' });
