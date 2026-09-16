import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRoute } from '@shopgate/engage/core';
import { makeStyles } from '@shopgate/engage/styles';
import config from '../../config.json';
import { makeGetIsSwitchVisible, getSelection } from '../../selectors';
import SwitchButton from './SwitchButton';

const { pageLinking, showSwitcherInHeader, iconSwitch } = config;

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  switchMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    alignItems: 'center',
  },
  menuItem: {
    marginRight: '10px',
    position: 'relative',
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: '-5px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderLeft: `1px solid ${theme.components.separatorLine.borderColor}`,
      height: '50%',
    },
    '&:first-child': {
      marginLeft: '10px',
    },
    '&:last-child': {
      marginRight: '10px',
    },
  },
  iconMenu: {
    margin: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
    backgroundColor: theme.palette.background.emphasized,
  },
  iconMenuItem: {
    margin: '4px',
    display: 'flex',
    alignItems: 'center',
  },
}));

/**
 * The SwitchHeader component.
 * @param {Object} props The component props.
 * @returns {JSX.Element}
 */
const SwitchHeader = ({ children }) => {
  const { classes, cx } = useStyles();
  const getIsSwitchVisible = useMemo(() => makeGetIsSwitchVisible(), []);
  const isVisible = useSelector(getIsSwitchVisible);
  const selection = useSelector(getSelection);

  return showSwitcherInHeader && isVisible ? (
    <nav className={classes.container}>
      <ul className={cx(iconSwitch ? classes.iconMenu : classes.switchMenu, 'page-switcher__menu')}>
        {pageLinking
          .filter(link => !link.externalUrl)
          .map(link => (
            <li
              key={link.label}
              className={cx({
                [classes.iconMenuItem]: iconSwitch,
                [classes.menuItem]: !iconSwitch,
                'page-switcher__icon-menu-item': iconSwitch,
                'page-switcher__menu-item': !iconSwitch,
                active: selection.path === link.path,
              })}
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
  ) : children;
};

SwitchHeader.propTypes = {
  children: PropTypes.node,
};

SwitchHeader.defaultProps = {
  children: null,
};

export default withRoute(SwitchHeader, { prop: 'route' });
