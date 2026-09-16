import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRoute } from '@shopgate/engage/core';
import { Link, ScrollHeader } from '@shopgate/engage/components';
import { makeStyles } from '@shopgate/engage/styles';
import config from '../../config.json';
import { makeGetIsSwitchVisible, getSelection } from '../../selectors';
import SwitchButton from '../SwitchHeader/SwitchButton';

const {
  pageLinking, showSwitcherInHeader, hideOnScroll, switcherBarBgColor, linkColor,
} = config;

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: switcherBarBgColor,
  },
  switchMenu: {
    listStyle: 'none',
    padding: '6px 0',
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    marginRight: '10px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: '-5px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderLeft: `1px solid ${linkColor || theme.components.separatorLine.borderColor}`,
      height: '50%',
    },
    '&:first-child': {
      marginLeft: '5px',
    },
    '&:last-child': {
      marginRight: '5px',
    },
    boxSizing: 'border-box',
  },
  link: {
    display: 'block',
    padding: '1px 6px',
    textDecoration: 'none',
    color: linkColor || theme.palette.text.secondary,
    fontSize: '14px',
    '&:focus': {
      outline: 'none !important',
    },
  },
  sticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 100,
  },
}));

/**
 * The SwitchNavbar component.
 * @param {Object} props The component props.
 * @returns {JSX.Element}
 */
const SwitchNavbar = ({ children }) => {
  const { classes } = useStyles();
  const getIsSwitchVisible = useMemo(() => makeGetIsSwitchVisible(), []);
  const isVisible = useSelector(getIsSwitchVisible);
  const selection = useSelector(getSelection);

  if (showSwitcherInHeader || !isVisible) {
    return children;
  }

  return (
    <ScrollHeader className={classes.sticky} hideOnScroll={hideOnScroll}>
      <nav className={classes.container}>
        <ul className={classes.switchMenu}>
          {pageLinking.map(link => (
            <li key={link.label} className={classes.menuItem}>
              {link.externalUrl ? (
                <Link
                  href={link.externalUrl}
                  state={{ target: '_blank' }}
                  className={classes.link}
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
  children: PropTypes.node,
};

SwitchNavbar.defaultProps = {
  children: null,
};

export default withRoute(SwitchNavbar, { prop: 'route' });
