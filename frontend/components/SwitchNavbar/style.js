import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { switcherBarBgColor, linkColor } from '../../config';

const { colors } = themeConfig;

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: switcherBarBgColor,
});

const switchMenu = css({
  listStyle: 'none',
  padding: '6px 0',
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
});

const menuItem = css({
  marginRight: '10px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: '-5px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderLeft: `1px solid ${linkColor}`,
    height: '50%',
  },
  ':first-child': {
    marginLeft: '5px',
  },
  ':last-child': {
    marginRight: '5px',
  },
  boxSizing: 'border-box',
});

const link = css({
  display: 'block',
  padding: '1px 6px',
  textDecoration: 'none',
  color: linkColor || colors.gray,
  fontSize: '14px',
  ':focus': {
    outline: 'none !important',
  },
});

const sticky = css({
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 100,
});

export default {
  switchMenu,
  menuItem,
  container,
  link,
  sticky,
};
