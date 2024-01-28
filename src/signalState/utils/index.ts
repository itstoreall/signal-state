import { signal } from '@preact/signals';
import { BasicRecord, Config, SetState, Val } from '../types';
import * as stateConfigs from '../states';

// ------- States:

const states = Object.values({ ...stateConfigs });

// ------- setState():

export const setState: SetState = (sig, val, dly) => {
  const update = () => (sig.value = { ...sig.value, val });
  dly ? setTimeout(() => update(), Number(`${dly}000`)) : update();
};

// ------- useState():

export const setBasic = () =>
  states.reduce((acc: BasicRecord, config: Config) => {
    const sig = signal(config.state);

    const basicState = {
      [config.key]: {
        get: () => sig.value.val,
        set: (val: Val, dly: number) => setState(sig, val, dly),
        isStore: sig.value.isStore
      }
    };

    return { ...acc, ...basicState };
  }, {});

// ------- localStorage:

const stateLSLabel = 'signal_state';
const data = 'localStorage data';

const _ls = localStorage;
const get = () => _ls.getItem(stateLSLabel);
const set = () => _ls.setItem(stateLSLabel, data);
const del = () => _ls.removeItem(stateLSLabel);

export const ls = {
  getLSData: get,
  setLSData: set,
  removeLSData: del
};

// ------- Window:

export const addBeforeUnload = (cb: () => void) =>
  window.addEventListener('beforeunload', cb);

export const removeBeforeUnload = (cb: () => void) =>
  window.removeEventListener('beforeunload', cb);
