//// [tests/cases/conformance/externalModules/verbatimModuleSyntaxRestrictionsESM.ts] ////

//// [decl.d.ts]
declare class CJSy {}
export = CJSy;

//// [ambient.d.ts]
declare module "ambient" {
    const _export: number;
    export = _export;
}

//// [types.ts]
interface Typey {}
export type { Typey };

//// [main.ts]
import CJSy = require("./decl"); // error
import type CJSy2 = require("./decl"); // ok I guess?
import CJSy3 from "./decl"; // ok in esModuleInterop
import * as types from "./types"; // ok
CJSy;

//// [ns.ts]
export namespace ns {
    export enum A {}
}


//// [ns.js]
export { ns };
var ns;
(function (ns) {
    let A;
    (function (A) {
    })(A = ns.A || (ns.A = {}));
})(ns || (ns = {}));
//// [main.js]
import CJSy3 from "./decl";
import * as types from "./types";
CJSy;
//// [types.js]
export {};
