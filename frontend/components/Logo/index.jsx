import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRoute } from '@shopgate/engage/core';
import { appConfig } from '@shopgate/engage';
import { makeStyles } from '@shopgate/engage/styles';
import config from '../../config.json';
import { makeGetIsSwitchVisible } from '../../selectors';

const { showSwitcherInHeader } = config;

const NAVIGATOR_HEIGHT = 56;

const useStyles = makeStyles()(() => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
  },
  image: {
    margin: '0 auto',
    marginLeft: showSwitcherInHeader ? '0' : 'auto',
    maxHeight: NAVIGATOR_HEIGHT,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

/**
 * The Logo component renders the logo if the switch is visible.
 * @param {Object} props The component props.
 * @returns {JSX.Element}
 */
const Logo = ({ children }) => {
  const { classes } = useStyles();
  const getIsSwitchVisible = useMemo(() => makeGetIsSwitchVisible(), []);
  const isSwitchVisible = useSelector(getIsSwitchVisible);

  return isSwitchVisible ? (
    <div className={`${classes.container} engage__logo`}>
      <img
        className={classes.image}
        src={appConfig.logo || appConfig.logoFallback}
        alt={appConfig.shopName}
      />
    </div>
  ) : children;
};

Logo.propTypes = {
  children: PropTypes.node,
};

Logo.defaultProps = {
  children: null,
};

export default withRoute(Logo, { prop: 'route' });
