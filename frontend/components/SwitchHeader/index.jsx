import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRoute } from '@shopgate/engage/core';
import getConfig from '../../helpers/getConfig';
import styles from './style';
import connect from './connector';
import SwitchButton from './SwitchButton';

const { pageLinking } = getConfig();

/**
 * The SwitchHeader component
 */
class SwitchHeader extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    selection: PropTypes.shape().isRequired,
  };

  static defaultProps = {};

  /**
   * The render method
   * @return {JSX}
   */
  render() {
    // create menu items from config
    const switchMenuItems = pageLinking.map((link) => {
      const isActive = this.props.selection.path === link.path;

      return (
        <li key={link.label} className={`${styles.menuItem} ${styles.noSelectStyle}`}>
          <SwitchButton isActive={isActive} link={link} />
        </li>
      );
    }, this);

    return this.props.isVisible && (
      <div className={styles.container}>
        <ul className={styles.switchMenu}>
          { switchMenuItems }
        </ul>
      </div>
    );
  }
}

export default withRoute(connect(SwitchHeader), { prop: 'route' });
