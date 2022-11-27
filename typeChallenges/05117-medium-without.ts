import { IsFalse } from './test-utils';
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]


// ============= Your Code Here =============
// 1 extends [1, 2] is false
// 1 extends 1 | 2 is true
// basically from https://github.com/type-challenges/type-challenges/issues/14118
type Without<T, U, U2Union = U extends unknown[] ? U[number] : U> = T extends [infer F, ...infer R]
  ? F extends U2Union ? Without<R, U> : [F, ...Without<R, U>]
  : T
