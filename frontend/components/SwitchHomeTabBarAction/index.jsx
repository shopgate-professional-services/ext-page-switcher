import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The SwitchHomeTabBarAction component.
 * If a switch page is selected, the home icon is highlighted.
 * @param {Object} props The component props.
 * @param {boolean} props.isSwitchVisible Determines if the home icon should be highlighted.
 * @returns {JSX.Element}
 */
const SwitchHomeTabBarAction = ({ isSwitchVisible, children }) => (
  isSwitchVisible ? (
    React.cloneElement(children, { isHighlighted: true })
  ) : children
);

SwitchHomeTabBarAction.propTypes = {
  isSwitchVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

SwitchHomeTabBarAction.defaultProps = {
  children: null,
};

export default withRoute(connect(SwitchHomeTabBarAction), { prop: 'route' });
