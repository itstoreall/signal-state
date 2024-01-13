import { effect } from '@preact/signals';
import useSignalState from '../../hooks/useSignalState';

const One = () => {
  const { first } = useSignalState();

  const { val, set, counter } = first;

  const reset = () => {
    counter.stop();
    set(999);
  };

  effect(() => {
    val === 0 && counter.run();
    val === 4 && reset();
  });

  console.log('One');

  return <div>{`One: ${val}`}</div>;
};

export default One;
