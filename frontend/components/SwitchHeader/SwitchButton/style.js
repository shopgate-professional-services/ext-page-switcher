import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { linkColor, linkSelectedColor, underlineOnActive } from '../../../config';

const { colors, shadows } = themeConfig;

const button = css({
  display: 'block',
  padding: '1px 6px',
  textDecoration: 'none',
  color: linkColor || colors.gray,
  fontSize: '14px',
  ':focus': {
    outline: 'none !important',
  },
}).toString();

const activeButton = css({
  display: 'block',
  padding: '1px 6px',
  textDecoration: underlineOnActive ? 'underline' : 'none',
  color: linkSelectedColor || colors.cta,
  fontSize: '14px',
  ':focus': {
    outline: 'none !important',
  },
}).toString();

const iconButtonBase = {
  padding: '4px 16px',
  borderRadius: '50px',
  ':focus-visible': {
    outline: 'none !important',
  },
};

const activeIconButton = css({
  ...iconButtonBase,
  boxShadow: shadows.material,
  backgroundColor: colors.light,
}).toString();

const iconButton = css({
  ...iconButtonBase,
}).toString();

export default {
  button,
  activeButton,
  iconButton,
  activeIconButton,
};
