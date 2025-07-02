import React from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import classNames from 'classnames';
import styles from './style';
import connect from './connector';
import SwitchButton from './SwitchButton';
import { pageLinking, showSwitcherInHeader, iconSwitch } from '../../config';

/**
 * The SwitchHeader component.
 * @param {Object} props The component props.
 * @param {boolean} props.isVisible Determines if the switcher should be displayed.
 * @param {Object} props.selection The currently selected item.
 * @param {string} props.selection.path The path of the selected item.
 * @returns {JSX.Element}
 */
const SwitchHeader = ({ isVisible, selection, children }) => (
  showSwitcherInHeader && isVisible ? (
    <nav className={styles.container}>
      <ul className={classNames(iconSwitch ? styles.iconMenu : styles.switchMenu, 'page-switcher__menu')}>
        {pageLinking
          .filter(link => !link.externalUrl)
          .map(link => (
            <li
              key={link.label}
              className={classNames(
                iconSwitch ? styles.iconMenuItem : styles.menuItem,
                iconSwitch ? 'page-switcher__icon-menu-item' : 'page-switcher__menu-item'
              )}
            >
              <SwitchButton
                isActive={selection.path === link.path}
                link={link}
                icon={link.icon}
                isIconSwitch={iconSwitch}
              />
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
