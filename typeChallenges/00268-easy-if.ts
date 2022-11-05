// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;

// ============= Your Code Here =============
// type If<C, T, F> = C ? T : F;
// we don't do it here
// but basically the same
// type If<C, T, F> = C extends true ? T : F;
// full version
// type If<C extends true|false, T, F> = C extends true ? T : F;
type If<C extends boolean, T, F> = C extends true ? T : F;
