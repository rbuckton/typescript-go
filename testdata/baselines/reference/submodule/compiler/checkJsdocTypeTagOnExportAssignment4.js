//// [tests/cases/compiler/checkJsdocTypeTagOnExportAssignment4.ts] ////

//// [checkJsdocTypeTagOnExportAssignment4.js]

//// [a.js]
/**
 * @typedef {number} Foo
 */

/** @type {Foo} */
export default "";



//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "";
//// [checkJsdocTypeTagOnExportAssignment4.js]
