import { css } from 'glamor';

const container = css({
  margin: '13.5px 2px auto auto',
  maxHeight: '44px',
});

const switchMenu = css({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

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
});

export default {
  switchMenu,
  menuItem,
  container,
};
