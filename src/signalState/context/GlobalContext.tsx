import { createContext } from 'react';
import { GlobalContent } from '../types';

const basic = { get: () => '', set: () => console.log() };
const counter = { run: () => 0, stop: () => console.log() };

export const GlobalContext = createContext<GlobalContent>({
  first: { ...basic, counter: counter },
  second: { ...basic }
});
