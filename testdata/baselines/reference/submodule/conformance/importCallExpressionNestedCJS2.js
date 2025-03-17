//// [tests/cases/conformance/dynamicImport/importCallExpressionNestedCJS2.ts] ////

//// [foo.ts]
export default "./foo";

//// [index.ts]
async function foo() {
    return await import((await import("./foo")).default);
}

//// [index.js]
async function foo() {
    return await Promise.resolve(`${(await Promise.resolve().then(() => require("./foo"))).default}`).then(s => require(s));
}
//// [foo.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "./foo";
