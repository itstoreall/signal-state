import { firstSignal } from '../signals';
import { setBacicFns } from '../utils';

const first = () => ({ ...setBacicFns(firstSignal, { ...counter }) });

// ------ counter:

const counter = {
  counter: {
    run: () => firstCounter,
    stop: () => clearInterval(firstCounter)
  }
};

const firstCounter = setInterval(() => {
  firstSignal.value = firstSignal.value + 1;
}, 1000);

export default first;
