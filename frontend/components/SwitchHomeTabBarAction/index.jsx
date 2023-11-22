import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The SwitchHomeTabBarAction component
 * If a page is selected, the home icon is highlighted.
 * @returns {JSX}
 */
const SwitchHomeTabBarAction = ({ isVisible, children }) => (
  isVisible ? (
    React.cloneElement(children, { isHighlighted: true })
  ) : children
);

SwitchHomeTabBarAction.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

SwitchHomeTabBarAction.defaultProps = {
  children: null,
};

export default withRoute(connect(SwitchHomeTabBarAction), { prop: 'route' });
