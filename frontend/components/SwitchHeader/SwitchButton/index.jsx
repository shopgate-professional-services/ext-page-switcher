import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import styles from './style';

/**
 * SwitchButton component
 * @param {Object} link The first number.
 */
class SwitchButton extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    link: PropTypes.shape().isRequired,
    setSelection: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleClick = (link) => {
    this.props.setSelection(link);
  }

  /**
   * Render menu item button
   * @returns {JSX}
   */
  render() {
    return (
      <button
        type="button"
        onClick={() => this.handleClick(this.props.link)}
        className={this.props.isActive ? styles.activeButton : styles.button}
      >
        {this.props.link.label}
      </button>
    );
  }
}

export default connect(SwitchButton);
