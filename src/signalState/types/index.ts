import { Signal } from '@preact/signals';

export type Sig = Signal<Val>;

// ------- General:

export type Val = number | string;

export type FnVal = () => Val;

export type FnVoid = () => void;

export type FnValVoid = (val: Val) => void;

export type Get = FnVal;

export type Set = FnValVoid;

// ------- Extra:

export type Counter = { counter: { run: FnVal; stop: FnVoid } };

// ------- Content:

export type Basic = { get: Get; set: Set };

export type GlobalContent = {
  first: Basic & Counter;
  second: Basic;
};
