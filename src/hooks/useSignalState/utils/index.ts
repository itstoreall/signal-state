import { Signal } from '@preact/signals';
import config from '../config';
import setFirstState from '../states/first';

export const stateHandler = (state: string) => {
  const { first } = config.states;

  switch (state) {
    case first:
      return setFirstState();

    default:
      break;
  }
};

export const updateState = (value: number, state: Signal) => {
  state.value = value;
};
