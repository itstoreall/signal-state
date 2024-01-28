import { createContext } from 'react';
import { Context } from '../types';

const initGet = () => 0;
const initSet = () => console.log();
const initStore = true;

export const GlobalContext = createContext<Context>({
  key: { get: initGet, set: initSet, isStore: initStore }
});
