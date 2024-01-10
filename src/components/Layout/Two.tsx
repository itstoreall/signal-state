import { effect } from '@preact/signals';
import useSignalState from '../../hooks/useSignalState';

const Two = () => {
  const { state } = useSignalState();

  const { first } = state;

  const reset = () => {
    first?.counter.stop();
    first?.update(0);
  };

  effect(() => {
    first?.value === 0 && first.counter.run();
    first?.value === 4 && reset();
  });

  // console.log('---->', first?.value);

  console.log('Two');

  return <div>{`Two: ${first?.value}`}</div>;
};

export default Two;
