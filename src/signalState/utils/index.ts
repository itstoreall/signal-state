import { Sig, SetState, Val } from '../types';

// ------- setState():

export const updateState: SetState = (sig, val, dly = 0) => {
  if (!dly) return (sig.value = val);
  setTimeout(() => {
    sig.value = val;
  }, dly);
};

// ------- useState():

export const setBacicFns = <E>(sig: Sig, extra: E) => ({
  get: () => sig.value,
  set: (val: Val, dly?: number) => updateState(sig, val, dly),
  ...extra
});
