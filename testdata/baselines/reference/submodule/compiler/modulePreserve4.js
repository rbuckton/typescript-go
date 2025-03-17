//// [tests/cases/compiler/modulePreserve4.ts] ////

//// [a.js]
export const x = 0;
module.exports.y = 0; // Error

//// [b.ts]
export default 0;

//// [c.ts]
export = {
  default: function() {}
};

//// [d.ts]
export = function() {};

//// [e.mts]
export = 0;

//// [f.cts]
export default 0;

//// [g.js]
exports.default = 0;

//// [main1.ts]
import { x, y } from "./a"; // No y
import a1 = require("./a"); // { x: 0 }
const a2 = require("./a"); // Error in TS
const a3 = await import("./a"); // { x: 0 }
a3.x;

import b1 from "./b"; // 0
import b2 = require("./b"); // { default: 0 }
b2.default;
const b3 = await import("./b"); // { default: 0 }
b3.default;

import c1 from "./c"; // { default: [Function: default] }
import c2 = require("./c"); // { default: [Function: default] }
c2.default;
import d1 from "./d"; // [Function: default]
import d2 = require("./d"); // [Function: default]
d2();
d2.default(); // Error
const d3 = await import("./d"); // { default: [Function: default] }
d3.default();

import e1 from "./e.mjs"; // 0
import e2 = require("./e.mjs"); // 0
import f1 from "./f.cjs"; // 0
import f2 = require("./f.cjs"); // { default: 0 }
f2.default;

import g1 from "./g"; // { default: 0 }
g1.default;
import g2 = require("./g"); // { default: 0 }
g2.default;

//// [main2.mts]
import { x, y } from "./a"; // No y
import a1 = require("./a"); // { x: 0 }
a1.x;
a1.default.x; // Arguably should exist but doesn't
const a2 = require("./a"); // Error in TS

import b1 from "./b"; // 0
import b2 = require("./b"); // { default: 0 }

import c1 from "./c"; // { default: [Function: default] }
import c2 = require("./c"); // { default: [Function: default] }
import d1 from "./d"; // [Function: default]
import d2 = require("./d"); // [Function: default]
import e1 from "./e.mjs"; // 0
import e2 = require("./e.mjs"); // 0
import f1 from "./f.cjs"; // 0
import f2 = require("./f.cjs"); // { default: 0 }

import g1 from "./g"; // { default: 0 }
import g2 = require("./g"); // { default: 0 }

//// [main3.cjs]
import { x, y } from "./a"; // No y
import a1 = require("./a"); // Error in JS
const a2 = require("./a"); // { x: 0 }

import b1 from "./b"; // 0
const b2 = require("./b"); // { default: 0 }

import c1 from "./c"; // { default: [Function: default] }
const c2 = require("./c"); // { default: [Function: default] }
import d1 from "./d"; // [Function: default]
const d2 = require("./d"); // [Function: default]
import e1 from "./e.mjs"; // 0
const e2 = require("./e.mjs"); // 0
import f1 from "./f.cjs"; // 0
const f2 = require("./f.cjs"); // { default: 0 }

import g1 from "./g"; // { default: 0 }
const g2 = require("./g"); // { default: 0 }

//// [main4.cjs]
exports.x = require("./g");

//// [dummy.ts]
export {}; // Silly test harness


//// [dummy.js]
export {};
//// [main4.cjs]
exports.x = require("./g");
//// [main3.cjs]
import { x, y } from "./a";
const a1 = require("./a");
const a2 = require("./a");
import b1 from "./b";
const b2 = require("./b");
import c1 from "./c";
const c2 = require("./c");
import d1 from "./d";
const d2 = require("./d");
import e1 from "./e.mjs";
const e2 = require("./e.mjs");
import f1 from "./f.cjs";
const f2 = require("./f.cjs");
import g1 from "./g";
const g2 = require("./g");
//// [main2.mjs]
import { x, y } from "./a";
const a1 = require("./a");
a1.x;
a1.default.x;
const a2 = require("./a");
import b1 from "./b";
const b2 = require("./b");
import c1 from "./c";
const c2 = require("./c");
import d1 from "./d";
const d2 = require("./d");
import e1 from "./e.mjs";
const e2 = require("./e.mjs");
import f1 from "./f.cjs";
const f2 = require("./f.cjs");
import g1 from "./g";
const g2 = require("./g");
//// [main1.js]
import { x, y } from "./a";
const a1 = require("./a");
const a2 = require("./a");
const a3 = await import("./a");
a3.x;
import b1 from "./b";
const b2 = require("./b");
b2.default;
const b3 = await import("./b");
b3.default;
import c1 from "./c";
const c2 = require("./c");
c2.default;
import d1 from "./d";
const d2 = require("./d");
d2();
d2.default();
const d3 = await import("./d");
d3.default();
import e1 from "./e.mjs";
const e2 = require("./e.mjs");
import f1 from "./f.cjs";
const f2 = require("./f.cjs");
f2.default;
import g1 from "./g";
g1.default;
const g2 = require("./g");
g2.default;
//// [g.js]
exports.default = 0;
//// [f.cjs]
export default 0;
//// [e.mjs]
module.exports = 0;
//// [d.js]
module.exports = function () { };
//// [c.js]
module.exports = {
    default: function () { }
};
//// [b.js]
export default 0;
//// [a.js]
export const x = 0;
module.exports.y = 0;
