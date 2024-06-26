import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';

const { variables } = themeConfig;

const container = css({
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
});

const image = css({
  margin: '0 auto',
  marginLeft: '0',
  maxHeight: variables.navigator.height,
  maxWidth: `calc(100vw - ${(variables.navigator.height * 3) + variables.gap.xbig}px)`,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default {
  container,
  image,
};
