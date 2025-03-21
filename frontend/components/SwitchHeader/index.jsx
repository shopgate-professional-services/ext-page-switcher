import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import styles from './style';
import connect from './connector';
import SwitchButton from './SwitchButton';
import { pageLinking, showSwitcherInHeader } from '../../config';

/**
 * The SwitchHeader component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const SwitchHeader = ({ isVisible, selection, children }) => (
  showSwitcherInHeader && isVisible ? (
    <nav className={styles.container}>
      <ul className={styles.switchMenu}>
        {pageLinking
          .filter(link => !link.externalUrl)
          .map(link => (
            <li key={link.label} className={styles.menuItem}>
              <SwitchButton isActive={selection.path === link.path} link={link} />
            </li>
          ))}
      </ul>
    </nav>
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
