/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

const Three = () => {
  const { third } = useGlobalContext();

  console.log(3, 'Three');

  useEffect(() => {
    third.set(3, 3);
  }, []);

  return <div>{`Three: ${third.get()}`}</div>;
};

export default Three;
