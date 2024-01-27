import { signal } from '@preact/signals';
import { BasicRecord, Config, SetState } from '../types';
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
        set: (val: number, dly: number) => setState(sig, val, dly),
        isStore: sig.value.isStore
      }
    };

    console.log('basicState', basicState);

    return (acc = { ...acc, ...basicState });
  }, {});
