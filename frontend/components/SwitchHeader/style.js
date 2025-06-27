import { css } from 'glamor';

const container = css({
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
}).toString();

const switchMenu = css({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  alignItems: 'center',
}).toString();

const menuItem = css({
  marginRight: '10px',
  position: 'relative',
  ':not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: '-5px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderLeft: '1px solid #ccc',
    height: '50%',
  },
  ':first-child': {
    marginLeft: '10px',
  },
  ':last-child': {
    marginRight: '10px',
  },
}).toString();

export default {
  switchMenu,
  menuItem,
  container,
};
