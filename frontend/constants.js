import { pageLinking } from './config';

export const REQUEST_SELECTION = 'REQUEST_SELECTION';
export const RECEIVE_SELECTION = 'RECEIVE_SELECTION';
export const SET_SELECTION = 'SET_SELECTION';
export const ERROR_SELECTION = 'ERROR_SELECTION';

export const SWITCH_WHITELIST = pageLinking.map(page => page.path);

export const REDUX_NAMESPACE_SELECTION = '@shopgate-project/page-switcher/SwitchSelection';
