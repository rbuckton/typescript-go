//// [tests/cases/compiler/declFileAmbientExternalModuleWithSingleExportedModule.ts] ////

//// [declFileAmbientExternalModuleWithSingleExportedModule_0.ts]
declare module "SubModule" {
    export module m {
        export module m3 {
            interface c {
            }
        }
    }
}

//// [declFileAmbientExternalModuleWithSingleExportedModule_1.ts]
///<reference path='declFileAmbientExternalModuleWithSingleExportedModule_0.ts' preserve="true" />
import SubModule = require('SubModule');
export var x: SubModule.m.m3.c;



//// [declFileAmbientExternalModuleWithSingleExportedModule_0.js]
//// [declFileAmbientExternalModuleWithSingleExportedModule_1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
