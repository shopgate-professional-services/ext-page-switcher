import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@shopgate/engage/components';
import connect from './connector';
import styles from './style';

/**
 * SwitchButton component
 * @param {Object} props The component props.
 * @param {boolean} props.isActive Indicates if the button is active or not.
 * @param {Object} props.link The link object that contains the label and other properties.
 * @param {Function} props.setSelection Function to handle the selection change.
 * @param {boolean} [props.isIconSwitch] Indicates if the button is an icon switch
 * @param {string} [props.icon] optional icon to show as switch
 * @returns {JSX.Element}
 */
const SwitchButton = ({
  isActive, link, setSelection, icon, isIconSwitch,
}) => {
  const buttonRef = useRef(null);
  const switchButtonRef = useRef(null);

  /**
   * Sets the current page selection.
   */
  const handleClick = () => {
    setSelection(link);
  };

  useEffect(() => {
    if (isActive && buttonRef.current) {
      buttonRef.current.focus();
    }
    if (isActive && switchButtonRef.current) {
      switchButtonRef.current.focus();
    }
  }, [isActive]);

  if (isIconSwitch && icon) {
    return (
      <button
        onClick={handleClick}
        type="button"
        ref={switchButtonRef}
        className={isActive ? styles.activeSwitchButton : styles.switchButton}
      >
        <Icon content={icon} size={28} />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      className={isActive ? styles.activeButton : styles.button}
      aria-current={isActive ? 'page' : undefined}
    >
      {link.label}
    </button>
  );
};

SwitchButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.shape().isRequired,
  setSelection: PropTypes.func.isRequired,
  icon: PropTypes.string,
  isIconSwitch: PropTypes.bool,
};

SwitchButton.defaultProps = {
  icon: null,
  isIconSwitch: false,
};

SwitchButton.defaultProps = {};

export default connect(SwitchButton);
