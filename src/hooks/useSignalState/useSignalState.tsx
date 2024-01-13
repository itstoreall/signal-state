import * as utils from './utils';
import config from './config';
// import * as types from './types';

const sts = config.states;

const useSignalState = () => ({
  // state: {
  //   first: utils.stateHandler(sts.first.lab)!
  // },
  first: utils.stateHandler(sts.first.lab)!,
  second: utils.stateHandler(sts.second.lab)!,
  config
  // types
});

export default useSignalState;
