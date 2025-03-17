//// [tests/cases/compiler/jsdocFunctionClassPropertiesDeclaration.ts] ////

//// [a.js]
/**
 * @param {number | undefined} x
 * @param {number | undefined} y
 */
export function Foo(x, y) {
    if (!(this instanceof Foo)) {
        return new Foo(x, y);
    }
    this.x = x;
    this.y = y;
}


//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = Foo;
function Foo(x, y) {
    if (!(this instanceof Foo)) {
        return new Foo(x, y);
    }
    this.x = x;
    this.y = y;
}
