import { useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

const One = () => {
  const { first } = useGlobalContext();

  console.log(1, 'One');

  useEffect(() => {
    first.counter.run();
  }, [first.counter]);

  first.get() === 5 && first.counter.stop();

  console.log('One first', first.get());

  return <div>{`One: ${first.get()}`}</div>;
};

export default One;
