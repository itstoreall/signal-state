import { signal } from '@preact/signals';
import { FirstState } from '../types';

// const firstState = { val: 0, isStore: true };

// const createState = (state: FirstState) => signal<FirstState>(state);

export const firstSignal = (state: FirstState) => signal<FirstState>(state);
