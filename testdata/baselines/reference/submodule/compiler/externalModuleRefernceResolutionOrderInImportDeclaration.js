//// [tests/cases/compiler/externalModuleRefernceResolutionOrderInImportDeclaration.ts] ////

//// [externalModuleRefernceResolutionOrderInImportDeclaration_file1.ts]
export function foo() { };

//// [externalModuleRefernceResolutionOrderInImportDeclaration_file2.ts]
declare module "externalModuleRefernceResolutionOrderInImportDeclaration_file1" {
    export function bar();
}


//// [externalModuleRefernceResolutionOrderInImportDeclaration_file3.ts]
///<reference path='externalModuleRefernceResolutionOrderInImportDeclaration_file2.ts'/>
import file1 = require('./externalModuleRefernceResolutionOrderInImportDeclaration_file1');
file1.foo();
file1.bar();



//// [externalModuleRefernceResolutionOrderInImportDeclaration_file3.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file1 = require("./externalModuleRefernceResolutionOrderInImportDeclaration_file1");
file1.foo();
file1.bar();
//// [externalModuleRefernceResolutionOrderInImportDeclaration_file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = foo;
function foo() { }
;
//// [externalModuleRefernceResolutionOrderInImportDeclaration_file2.js]
