//// [tests/cases/conformance/declarationEmit/libReferenceNoLibBundle.ts] ////

//// [fakelib.ts]
interface Object { }
interface Array<T> { }
interface String { }
interface Boolean { }
interface Number { }
interface Function { }
interface RegExp { }
interface IArguments { }


//// [file1.ts]
/// <reference lib="dom" />
export declare interface HTMLElement { field: string; }
export const elem: HTMLElement = { field: 'a' };


//// [file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elem = void 0;
exports.elem = { field: 'a' };
//// [fakelib.js]
