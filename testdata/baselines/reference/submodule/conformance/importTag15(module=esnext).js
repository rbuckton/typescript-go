//// [tests/cases/conformance/jsdoc/importTag15.ts] ////

//// [0.ts]
export interface I { }

//// [1.js]
/** @import { I } from './0' with { type: "json" } */
/** @import * as foo from './0' with { type: "json" } */

/** @param {I} a */
function f(a) {}


//// [1.js]
function f(a) { }
//// [0.js]
export {};
