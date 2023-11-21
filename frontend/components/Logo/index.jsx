import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import appConfig from '@shopgate/pwa-common/helpers/config';
import styles from './style';
import connect from './connector';

/**
 * The Logo component.
 * @return {JSX}
 */
const Logo = ({ isVisible, children }) => (
  isVisible ? (
    <div className={`${styles.container} engage__logo`}>
      <img className={styles.image} src={appConfig.logo} alt={appConfig.shopName} />
    </div>
  ) : children
);

Logo.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

Logo.defaultProps = {
  children: null,
};

export default withRoute(connect(Logo), { prop: 'route' });
