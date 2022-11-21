// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];

// ============= Your Code Here =============
// base case
type TupleToNestedObject1<T, U> = T extends [...infer H, infer T] ? never : U;

type TupleToNestedObject<T, U> = T extends [infer F extends string, ...infer R]
  ? { [K in F]: TupleToNestedObject<R, U> }
  : U;
