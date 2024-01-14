import { Signal } from '@preact/signals';

export type Sig = Signal<Val>;

// ------- General:

export type Val = number | string;
export type Dly = number;

export type FnVal = () => Val;
export type FnVoid = () => void;
export type FnValVoid = (val: Val) => void;

// ------- Basic:

export type Get = FnVal;
export type Set = (val: Val, dly?: Dly) => void;
export type SetNum = (val: number, dly?: Dly) => void;
export type SetStr = (val: string, dly?: Dly) => void;

export type Basic<T, U> = { get: T; set: U };
export type SetState = (sig: Sig, val: Val, dly?: Dly) => void;

// ------- Extra:

export type Counter = { counter: { run: FnVal; stop: FnVoid } };

// ------- Context:

export type Context = {
  first: Basic<FnVal, SetNum> & Counter;
  second: Basic<FnVal, (val: string, dly?: Dly) => void>;
};
