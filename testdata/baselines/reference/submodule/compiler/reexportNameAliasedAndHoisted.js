//// [tests/cases/compiler/reexportNameAliasedAndHoisted.ts] ////

//// [gridview.ts]
export type Sizing = any;
export const Sizing = null;
//// [index.ts]
// https://github.com/microsoft/TypeScript/issues/39195
export { Sizing as GridViewSizing } from './gridview';
export namespace Sizing {
    export const Distribute = { type: 'distribute' };
}

//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sizing = exports.GridViewSizing = void 0;
const gridview_1 = require("./gridview");
Object.defineProperty(exports, "GridViewSizing", { enumerable: true, get: function () { return gridview_1.Sizing; } });
var Sizing;
(function (Sizing) {
    Sizing.Distribute = { type: 'distribute' };
})(Sizing || (exports.Sizing = Sizing = {}));
//// [gridview.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sizing = void 0;
exports.Sizing = null;
