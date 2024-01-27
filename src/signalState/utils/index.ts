import { Signal } from '@preact/signals';
import { FirstState, SetState } from '../types';

// ------- setState():

export const setState: SetState = (sig, val, dly) => {
  const update = () => (sig.value = { ...sig.value, val });
  dly ? setTimeout(() => update(), Number(`${dly}000`)) : update();
};

// ------- useState():

export const setBasic = (sig: Signal<FirstState>) => ({
  get: () => sig.value.val,
  set: (val: number, dly: number) => setState(sig, val, dly),
  isStore: sig.value.isStore
});
