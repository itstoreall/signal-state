import * as utils from './utils';
import config from './config';

const useSignalState = () => ({
  state: {
    first: utils.stateHandler(config.states.first)
  },
  config
});

export default useSignalState;
