import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import styles from './style';

/**
 * SwitchButton component
 * @param {Object} props The component props.
 * @param {JSX} .
 */
const SwitchButton = ({ isActive, link, setSelection }) => {
  const handleClick = () => {
    setSelection(link);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isActive ? styles.activeButton : styles.button}
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
