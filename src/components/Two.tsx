/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalContext } from '../signalState/hooks/useGlobalContext';

const Two = () => {
  const { second } = useGlobalContext();

  console.log(2, 'Two');

  useEffect(() => {
    second.set('Hello', 2);
  }, []);

  return <div>{`Two: ${second.get()}`}</div>;
};

export default Two;
