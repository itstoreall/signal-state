/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import * as types from '../signalState/states/types';
import state from '../signalState';

const Fourth = () => {
  const fourthVal = state.fourth.get() as types.Fourth;

  console.log(41, 'Fourth', fourthVal);

  useEffect(() => {
    state.fourth.set({ age: [41, 36], user: ['Serhii', 'Helga'] }, 4);
  }, []);

  if (!fourthVal.user || !fourthVal.age) return <div>{`Fourth:`}</div>;

  return <div>{`Fourth: ${`${fourthVal.user[1]} ${fourthVal.age[1]}`}`}</div>;
};

export default Fourth;
