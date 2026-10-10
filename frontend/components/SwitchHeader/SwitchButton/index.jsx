import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Icon } from '@shopgate/engage/components';
import { makeStyles } from '@shopgate/engage/styles';
import config from '../../../config.json';
import { setSelection } from '../../../action-creators';

const { underlineOnActive } = config;

const iconButtonBase = {
  padding: '4px 16px',
  borderRadius: '50px',
  '&:focus-visible': {
    outline: 'none !important',
  },
};

const useStyles = makeStyles()(theme => ({
  button: {
    display: 'block',
    padding: '1px 6px',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    fontSize: '14px',
    '&:focus': {
      outline: 'none !important',
    },
  },
  activeButton: {
    display: 'block',
    padding: '1px 6px',
    textDecoration: underlineOnActive ? 'underline' : 'none',
    color: theme.palette.text.primary,
    fontSize: '14px',
    '&:focus': {
      outline: 'none !important',
    },
  },
  iconButton: {
    ...iconButtonBase,
  },
  activeIconButton: {
    ...iconButtonBase,
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.surface,
  },
}));

/**
 * SwitchButton component
 * @param {Object} props The component props.
 * @param {boolean} props.isActive Indicates if the button is active or not.
 * @param {Object} props.link The link object that contains the label and other properties.
 * @param {boolean} [props.isIconSwitch] Indicates if the button is an icon switch
 * @param {string} [props.icon] optional icon to show as switch
 * @returns {JSX.Element}
 */
const SwitchButton = ({
  isActive, link, icon, isIconSwitch,
}) => {
  const { classes, cx } = useStyles();
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const switchButtonRef = useRef(null);

  /**
   * Sets the current page selection.
   */
  const handleClick = () => {
    dispatch(setSelection(link));
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
        className={cx({
          [classes.activeIconButton]: isActive,
          selected: isActive,
          [classes.iconButton]: !isActive,
        })}
        aria-label={link.label}
      >
        <Icon content={icon} size={26} />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      className={isActive ? classes.activeButton : classes.button}
      aria-current={isActive ? 'page' : undefined}
    >
      {link.label}
    </button>
  );
};

SwitchButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.shape().isRequired,
  icon: PropTypes.string,
  isIconSwitch: PropTypes.bool,
};

SwitchButton.defaultProps = {
  icon: null,
  isIconSwitch: false,
};

export default SwitchButton;
