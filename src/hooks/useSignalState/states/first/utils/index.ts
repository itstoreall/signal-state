import { firstSignal } from '../..';

export const counter = setInterval(() => {
  firstSignal.value = firstSignal.value + 1;
}, 1000);
