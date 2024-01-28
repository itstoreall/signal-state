import { Signal } from '@preact/signals';
import * as t from '../states/types';

export type Val = number | string | number[] | string[] | null | t.UnionTypes;

// ------ State:

export type State = { val: Val; isStore: boolean };
export type Config = { key: string; state: State };

// ------ Basic:

export type Get = () => Val;
export type Set = (val: Val, dly: number) => void;
export type IsStore = boolean;

// ------ Context:

export type Context = { [key: string]: StateFunctions };
export type StateFunctions = { get: Get; set: Set; isStore: IsStore };
export type BasicRecord = Record<string, StateFunctions>;

// ------ utils:

export type SetState = (sig: Signal<State>, val: Val, dly: number) => void;
