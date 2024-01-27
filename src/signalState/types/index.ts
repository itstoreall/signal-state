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

// ------ Context:

export type Context = {
  first: { get: Get; set: Set; isStore: IsStore };
};
