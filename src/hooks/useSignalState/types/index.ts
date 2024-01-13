import { Signal } from '@preact/signals';

export type Val = number;

export type Set = (v: Val) => void;

export type Sig = Signal<Val>;
