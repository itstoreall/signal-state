import { setBacicFns } from '../../utils';
import * as utils from './utils';
import { firstSignal } from '..';

const handleFirstState = () => ({
  ...setBacicFns(firstSignal),

  counter: {
    run: () => utils.counter,
    stop: () => clearInterval(utils.counter)
  }
});

export default handleFirstState;
