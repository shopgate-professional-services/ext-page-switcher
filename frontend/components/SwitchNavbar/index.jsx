import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import { Link, ScrollHeader } from '@shopgate/engage/components';
import styles from './style';
import connect from '../SwitchHeader/connector';
import SwitchButton from '../SwitchHeader/SwitchButton';
import { pageLinking, showSwitcherInHeader, hideOnScroll } from '../../config';

/**
 * The SwitchNavbar component
 * @param {boolean} props.isVisible Indicates whether the navbar is visible.
 * @param {Object} props.selection The current selection object.
 * @returns {JSX.Element}
 */
const SwitchNavbar = ({ isVisible, selection, children }) => {
  if (showSwitcherInHeader || !isVisible) {
    return children;
  }

  return (
    <ScrollHeader className={styles.sticky} hideOnScroll={hideOnScroll}>
      <nav className={styles.container}>
        <ul className={styles.switchMenu}>
          {pageLinking.map(link => (
            <li key={link.label} className={styles.menuItem}>
              {link.externalUrl ? (
                <Link
                  href={link.externalUrl}
                  state={{ target: '_blank' }}
                  className={styles.link}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ) : (
                <SwitchButton isActive={selection.path === link.path} link={link} />
              )}
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </ScrollHeader>
  );
};

SwitchNavbar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  selection: PropTypes.shape().isRequired,
  children: PropTypes.node,
};

SwitchNavbar.defaultProps = {
  children: null,
};

export default withRoute(connect(SwitchNavbar), { prop: 'route' });
