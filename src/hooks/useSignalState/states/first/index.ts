import { signal } from '@preact/signals';
import * as utils from '../../utils';

const firstSignal = signal(0);

const counter = setInterval(() => {
  firstSignal.value = firstSignal.value + 1;
}, 1000);

const setFirstState = () => ({
  value: firstSignal.value,
  update: (val: number) => utils.updateState(val, firstSignal),
  counter: {
    run: () => counter,
    stop: () => clearInterval(counter)
  }
});

export default setFirstState;
