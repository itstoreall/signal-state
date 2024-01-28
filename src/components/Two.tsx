/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import state from '../signalState';

const Two = () => {
  console.log(2, 'Two', state.second.get());

  useEffect(() => {
    state.second.set('Hello', 2);
  }, []);

  return <div>{`Two: ${state.second.get()}`}</div>;
};

export default Two;
