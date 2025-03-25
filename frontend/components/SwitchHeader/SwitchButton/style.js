import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { linkColor, linkSelectedColor, underlineOnActive } from '../../../config';

const { colors } = themeConfig;

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

export default {
  button,
  activeButton,
};
