import { useContext } from 'react';
import { GlobalContext } from '../signalState/context/GlobalContext';

export const useGlobalContext = () => useContext(GlobalContext);
