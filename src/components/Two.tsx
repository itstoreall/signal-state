/* eslint-disable react-hooks/exhaustive-deps */
// import { effect } from '@preact/signals';
import { useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

const Two = () => {
  const { second } = useGlobalContext();

  console.log(2, 'Two');

  useEffect(() => {
    second.set(2, 2);
  }, []);

  return <div>{`Two: ${second.get()}`}</div>;
};

export default Two;
