//// [tests/cases/conformance/declarationEmit/libReferenceDeclarationEmitBundle.ts] ////

//// [file1.ts]
/// <reference lib="dom" preserve="true" />
export declare const elem: HTMLElement;

//// [file2.ts]
/// <reference lib="dom" preserve="true" />
export {}
declare const elem: HTMLElement;

//// [file2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
