/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import * as types from '../signalState/states/types';
import state from '../signalState';

const Three = () => {
  const thirdVal = state.third.get() as types.Third;

  console.log(3, 'Three', state.third.get());

  useEffect(() => {
    state.third.set({ name: 'Serhii' }, 3);
  }, []);

  return <div>{`Three: ${thirdVal.name}`}</div>;
};

export default Three;
