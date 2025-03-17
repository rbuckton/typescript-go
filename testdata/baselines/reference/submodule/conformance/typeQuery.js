//// [tests/cases/conformance/externalModules/typeOnly/typeQuery.ts] ////

//// [a.ts]
export class A { }

//// [b.ts]
import type { A } from './a';
let AConstructor: typeof A;


//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
class A {
}
exports.A = A;
//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let AConstructor;
