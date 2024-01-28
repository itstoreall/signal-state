import { setBasic } from './utils';

const stateContext = {
  ...setBasic()
};

export default stateContext;

/*

How to use:

1. Add a new state config in the states/index.ts
2. Add a new type of the state in the states/types.ts
2. Add this new type to the Val in the types/index.ts

--- primitive values:

const { stateName } = useGlobalContext();

stateName.get()
stateName.set(value, delay)
stateName.isStore

--- value is an object:

import * as types from '../signalState/states/types';

stateName.get() as types.StateName

---

*/
