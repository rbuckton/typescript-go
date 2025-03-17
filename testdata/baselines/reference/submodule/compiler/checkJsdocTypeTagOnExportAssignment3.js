//// [tests/cases/compiler/checkJsdocTypeTagOnExportAssignment3.ts] ////

//// [checkJsdocTypeTagOnExportAssignment3.js]

//// [a.js]
/**
 * @typedef {Object} Foo
 * @property {boolean} a
 * @property {boolean} b
 */

const bar = { c: 1 };

/** @type {Foo} */
export default bar;

//// [b.js]
import a from "./a";
a;


//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
a_1.default;
//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bar = { c: 1 };
exports.default = bar;
//// [checkJsdocTypeTagOnExportAssignment3.js]
