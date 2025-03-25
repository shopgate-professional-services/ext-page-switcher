import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { showSwitcherInHeader } from '../../config';

const { variables } = themeConfig;

const container = css({
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
}).toString();

const image = css({
  margin: '0 auto',
  marginLeft: showSwitcherInHeader ? '0' : 'auto',
  maxHeight: variables.navigator.height,
  maxWidth: `calc(100vw - ${(variables.navigator.height * 3) + variables.gap.xbig}px)`,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}).toString();

export default {
  container,
  image,
};
