//// [tests/cases/conformance/es6/moduleExportsSystem/anonymousDefaultExportsSystem.ts] ////

//// [a.ts]
export default class {}

//// [b.ts]
export default function() {}

//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1() { }
//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
}
exports.default = default_1;
