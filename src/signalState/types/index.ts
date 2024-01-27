import { Signal } from '@preact/signals';

export type FirstState = { val: number; isStore: boolean };

// ------ Basic:

export type Get = () => number;
export type Set = (get: number, dly: number) => void;
export type IsStore = boolean;

// ------ utils:

export type SetState = (
  sig: Signal<FirstState>,
  val: number,
  dly: number
) => void;

// ------ Config:

export type Config = { key: string; state: FirstState };

// ------ State:

export type BasicRecord = Record<string | number, State>;

export type State = { get: Get; set: Set; isStore: IsStore };

// ------ Context:

export type Context = {
  [key: string]: State;
};
