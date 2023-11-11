import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import getConfig from '../../../helpers/getConfig';

const { linkColor, linkSelectedColor } = getConfig();
const { colors } = themeConfig;

const button = css({
  display: 'block',
  padding: '1px 6px 1px 6px',
  textDecoration: 'none',
  color: linkColor || colors.gray,
  fontSize: '14px',
});

const activeButton = css({
  display: 'block',
  padding: '1px 6px 1px 6px',
  textDecoration: 'none',
  color: linkSelectedColor || colors.cta,
  fontSize: '14px',
});

export default {
  button,
  activeButton,
};
