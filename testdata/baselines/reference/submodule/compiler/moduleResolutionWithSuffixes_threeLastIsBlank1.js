//// [tests/cases/compiler/moduleResolutionWithSuffixes_threeLastIsBlank1.ts] ////

//// [index.ts]
import { ios } from "./foo";
//// [foo-ios.ts]
export function ios() {}
//// [foo__native.ts]
export function native() {}
//// [foo.ts]
export function base() {}


//// [foo.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = base;
function base() { }
//// [foo__native.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.native = native;
function native() { }
//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [foo-ios.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ios = ios;
function ios() { }
