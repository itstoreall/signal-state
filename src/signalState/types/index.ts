import { Signal } from '@preact/signals';

export type Val = number | string;

export type State = { val: Val; isStore: boolean };

// ------ Basic:

export type Get = () => Val;
export type Set = (val: Val, dly: number) => void;
export type IsStore = boolean;

// ------ utils:

export type SetState = (sig: Signal<State>, val: Val, dly: number) => void;

// ------ Config:

export type Config = { key: string; state: State };

// ------ State:

export type StateFunctions = { get: Get; set: Set; isStore: IsStore };

export type BasicRecord = Record<string, StateFunctions>;

// ------ Context:

export type Context = {
  [key: string]: StateFunctions;
};
