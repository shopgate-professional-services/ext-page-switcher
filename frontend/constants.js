import getConfig from './helpers/getConfig';

const { pageLinking } = getConfig();

export const SET_SWITCH_SELECTION = 'SET_SWITCH_SELECTION';
export const ERROR_SWITCH_SELECTION = 'ERROR_SWITCH_SELECTION';

export const SWITCH_WHITELIST = pageLinking.map(page => page.path);

export const REDUX_NAMESPACE_SELECTION = '@shopgate-project/page-switcher/SwitchSelection';
