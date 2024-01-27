/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';
import * as types from '../signalState/states/types';

const Three = () => {
  const { third } = useGlobalContext();

  console.log(3, 'Three');

  useEffect(() => {
    third.set({ name: 'Serhii' }, 3);
  }, []);

  const { name } = third.get() as types.Third;

  return <div>{`Three: ${name}`}</div>;
};

export default Three;
