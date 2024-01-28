/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';
import * as types from '../signalState/states/types';

const Fourth = () => {
  const { fourth } = useGlobalContext();

  console.log(4, 'Fourth');

  useEffect(() => {
    fourth.set({ age: [41, 36, 35], user: ['Serhii', 'Helga', 'Max'] }, 4);
  }, []);

  const { user, age } = fourth.get() as types.Fourth;
  const userValue = user ? user[1] : 'no user';
  const ageValue = age ? age[1] : '';

  return <div>{`Fourth: ${userValue} ${ageValue}`}</div>;
};

export default Fourth;
