export type Third = { name: string };

export type Fourth = { user: string[] | null; age: number[] | null };

/* 

Export a new type and add it to the CustomType: 

*/

// Custom
type CustomType = Third | Fourth;

// System
type Union<T> = T;
export type UnionTypes = Union<CustomType>;
