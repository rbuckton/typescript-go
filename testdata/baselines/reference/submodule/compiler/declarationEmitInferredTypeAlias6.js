//// [tests/cases/compiler/declarationEmitInferredTypeAlias6.ts] ////

//// [0.ts]
{
    type Data = string | boolean;
    let obj: Data = true;
}
export { }

//// [1.ts]
let v = "str" || true;
export { v }

//// [1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v = void 0;
let v = "str" || true;
exports.v = v;
//// [0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    let obj = true;
}
