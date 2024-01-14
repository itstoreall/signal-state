import { Sig, Val } from '../types';

// ------- setState():

export const updateState = (sig: Sig, val: Val) => (sig.value = val);

// ------- useState():

export const setBacicFns = <E>(sig: Sig, extra: E) => ({
  get: () => sig.value,
  set: (val: Val) => updateState(sig, val),
  ...extra
});
