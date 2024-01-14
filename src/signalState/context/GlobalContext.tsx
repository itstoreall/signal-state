import { createContext } from 'react';
import { Context } from '../types';

const basic = { get: () => 0 || '', set: () => console.log() };
const counter = { run: () => 0, stop: () => console.log() };

export const GlobalContext = createContext<Context>({
  first: { ...basic, counter: counter },
  second: { ...basic }
});
