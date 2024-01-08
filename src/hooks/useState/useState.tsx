import { signal } from '@preact/signals';

const first = signal(0);

const firstCounter = setInterval(() => {
  first.value = first.value + 1;
}, 1000);

const useState = () => {
  const state = {
    first: {
      value: first.value,
      update: (val: number) => (first.value = val),
      counter: {
        run: () => firstCounter,
        stop: () => clearInterval(firstCounter)
      }
    }
  };

  return state;
};

export default useState;
