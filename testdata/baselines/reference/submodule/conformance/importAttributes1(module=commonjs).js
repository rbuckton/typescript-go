//// [tests/cases/conformance/importAttributes/importAttributes1.ts] ////

//// [0.ts]
export const a = 1;
export const b = 2;

//// [1.ts]
import './0' with { type: "json" }
import { a, b } from './0' with { "type": "json" }
import * as foo from './0' with { type: "json" }
a;
b;
foo.a;
foo.b;
//// [2.ts]
import { a, b } from './0' with {}
import { a as c, b as d } from './0' with { a: "a", b: "b", c: "c" }
a;
b;
c;
d;
//// [3.ts]
const a = import('./0')
const b = import('./0', { with: { type: "json" } })
const c = import('./0', { with: { type: "json", ttype: "typo" } })
const d = import('./0', { with: {} })
const dd = import('./0', {})
declare function foo(): any;
const e = import('./0', foo())
const f = import()
const g = import('./0', {}, {})
const h = import('./0', { with: { type: "json" }},)


//// [3.js]
const a = Promise.resolve().then(() => require('./0'));
const b = Promise.resolve().then(() => require('./0'));
const c = Promise.resolve().then(() => require('./0'));
const d = Promise.resolve().then(() => require('./0'));
const dd = Promise.resolve().then(() => require('./0'));
const e = Promise.resolve().then(() => require('./0'));
const f = Promise.resolve().then(() => require());
const g = Promise.resolve().then(() => require('./0'));
const h = Promise.resolve().then(() => require('./0'));
//// [2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _0_1 = require("./0");
const _0_2 = require("./0");
_0_1.a;
_0_1.b;
_0_2.a;
_0_2.b;
//// [1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./0");
const _0_1 = require("./0");
const foo = require("./0");
_0_1.a;
_0_1.b;
foo.a;
foo.b;
//// [0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = exports.a = void 0;
exports.a = 1;
exports.b = 2;
