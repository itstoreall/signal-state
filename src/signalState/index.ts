import { firstSignal } from './signals';
import { setBasic } from './utils';

const stateContext = {
  first: setBasic(firstSignal)
};

export default stateContext;

/*

How to use:

1. Add a new signal (nameSignal) to the signals/index.ts
2. Create a new file (stateName.ts) in the states foulder
3. Add a basic fn to the stateName.ts: const stateName = () => ({ ...setBacicFns(nameSignal, {}) });
4. Add the stateName to the stateContext
5. Add a type field to the GlobalContent

const { stateName } = useGlobalContext();

*/
