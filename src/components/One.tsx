/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import state from '../signalState';

const One = () => {
  const firstVal = state.first.get();

  console.log(1, 'One', firstVal);

  useEffect(() => {
    state.first.set(1, 1);
  }, []);

  return <div>{`One: ${firstVal ? state.first.get() : ''}`}</div>;
};

export default One;
