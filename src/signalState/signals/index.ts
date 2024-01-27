import { signal } from '@preact/signals';
import { FirstState } from '../types';

const firstState = { val: 0, isStore: true };

const createState = () => {
  return signal<FirstState>(firstState);
};

export const firstSignal = createState();
