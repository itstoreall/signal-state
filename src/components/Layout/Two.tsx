import { effect } from '@preact/signals';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const Two = () => {
  console.log(2, 'Two');

  const { first, second } = useGlobalContext();

  effect(() => {
    if (first.get() !== 5) return;

    // first.set(999);

    console.log('Two second:', second.get());
  });

  return <div>Two</div>;
};

export default Two;
