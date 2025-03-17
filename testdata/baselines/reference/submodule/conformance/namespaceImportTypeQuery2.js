//// [tests/cases/conformance/externalModules/typeOnly/namespaceImportTypeQuery2.ts] ////

//// [z.ts]
interface A {}
export type { A };

//// [a.ts]
import { A } from './z';
const A = 0;
export { A };
export class B {};

//// [b.ts]
import * as types from './a';
let t: typeof types = {
  A: undefined as any, // ok
  B: undefined as any,
}


//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let t = {
    A: undefined,
    B: undefined,
};
//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
const A = 0;
exports.A = A;
class B {
}
exports.B = B;
;
//// [z.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
