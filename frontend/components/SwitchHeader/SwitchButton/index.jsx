import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import styles from './style';

/**
 * SwitchButton component
 * @param {boolean} props.isActive Indicates if the button is active or not.
 * @param {Object} props.link The link object that contains the label and other properties.
 * @param {Function} props.setSelection Function to handle the selection change.
 * @returns {JSX.Element}
 */
const SwitchButton = ({ isActive, link, setSelection }) => {
  /**
   * Sets the current page selection.
   */
  const handleClick = () => {
    setSelection(link);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isActive ? styles.activeButton : styles.button}
      aria-current={isActive ? link.label : undefined}
    >
      {link.label}
    </button>
  );
};

SwitchButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.shape().isRequired,
  setSelection: PropTypes.func.isRequired,
};

SwitchButton.defaultProps = {};

export default connect(SwitchButton);
