import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import { appConfig } from '@shopgate/engage';
import styles from './style';
import connect from './connector';

/**
 * The Logo component.
 * @return {JSX}
 */
const Logo = ({ isSwitchVisible, children }) => (
  isSwitchVisible ? (
    <div className={`${styles.container} engage__logo`}>
      <img className={styles.image} src={appConfig.logo} alt={appConfig.shopName} />
    </div>
  ) : children
);

Logo.propTypes = {
  isSwitchVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

Logo.defaultProps = {
  children: null,
};

export default withRoute(connect(Logo), { prop: 'route' });
