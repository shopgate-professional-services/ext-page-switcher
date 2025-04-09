import { routeDidEnter$ } from '@shopgate/pwa-common/streams/router';

const BROWSE_PATH = '/browse';
/**
 * Emits when the browse page was entered.
 */
export const browseDidEnter$ = routeDidEnter$
  .filter(({ action }) => action.route.pattern === BROWSE_PATH);
