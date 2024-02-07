import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import styles from './style';
import connect from './connector';
import SwitchButton from './SwitchButton';
import { pageLinking } from '../../config';

/**
 * The SwitchHeader component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const SwitchHeader = ({ isVisible, selection, children }) => (
  isVisible ? (
    <div className={styles.container}>
      <ul className={styles.switchMenu}>
        { pageLinking.map(link => (
          <li key={link.label} className={styles.menuItem}>
            <SwitchButton isActive={selection.path === link.path} link={link} />
          </li>
        )) }
      </ul>
    </div>
  ) : children
);

SwitchHeader.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  selection: PropTypes.shape().isRequired,
  children: PropTypes.node,
};

SwitchHeader.defaultProps = {
  children: null,
};

export default withRoute(connect(SwitchHeader), { prop: 'route' });
