import handleFirstState from '../states/first';
import handleSecondState from '../states/second';
import { Sig, Val } from '../types';
import config from '../config';

const sts = config.states;

// ------- Main handler:

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateHandler = (stateLabel: string) => any;

export const stateHandler: StateHandler = stateLabel => {
  switch (stateLabel) {
    case sts.first.lab:
      return handleFirstState();

    case sts.second.lab:
      return handleSecondState();

    default:
      break;
  }
};

// ------- setState():

export const updateState = (value: Val, sig: Sig) => (sig.value = value);

// ------- useState():

export const setBacicFns = (sig: Sig) => ({
  val: sig.value,
  set: (val: Val) => updateState(val, sig)
});
