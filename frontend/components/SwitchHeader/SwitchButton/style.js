import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { linkColor, linkSelectedColor } from '../../../config';

const { colors } = themeConfig;

const button = css({
  display: 'block',
  padding: '1px 6px 1px 6px',
  textDecoration: 'none',
  color: linkColor || colors.gray,
  fontSize: '14px',
  ':focus': {
    outline: 'none !important',
  },
});

const activeButton = css({
  display: 'block',
  padding: '1px 6px 1px 6px',
  textDecoration: 'none',
  color: linkSelectedColor || colors.cta,
  fontSize: '14px',
  ':focus': {
    outline: 'none !important',
  },
});

export default {
  button,
  activeButton,
};
