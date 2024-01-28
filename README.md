# Signal State

The State with GlobalContext [GitHub branch](https://github.com/itstoreall/signal-state/tree/backup-multi-state-globalcontext)

The State without GlobalContext [GitHub branch](https://github.com/itstoreall/signal-state/tree/backup-state-without-global-context)

--

### How to use:

- Add a new state config in the states/index.ts
- Add a new type of the state in the states/types.ts
- Add this new type to the CustomType in the states/types.ts

--

_Primitive values:_

```
import state from '../signalState';

const stateNameValue = state.stateName.get();
state.stateName.set(value, delay)
state.stateName.isStore
```

_Value is an object:_

```
import \* as types from '../signalState/states/types';

const stateNameValue = state.third.get() as types.StateName;

return <div>{`Name: ${stateNameValue.name}`}</div>;
```
