/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

const One = () => {
  const { first } = useGlobalContext();

  console.log(1, 'One');

  useEffect(() => {
    first.set(3, 3);
  }, []);

  return <div>{`One: ${first.get()}`}</div>;
};

export default One;
