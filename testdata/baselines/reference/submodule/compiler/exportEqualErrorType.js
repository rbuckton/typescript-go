//// [tests/cases/compiler/exportEqualErrorType.ts] ////

//// [exportEqualErrorType_0.ts]
module server {
    export interface connectModule {
        (res, req, next): void;
    }
    export interface connectExport {
        use: (mod: connectModule) => connectExport;
    }
}
var server: {
    (): server.connectExport;
    foo: Date;
};
export = server;
 
//// [exportEqualErrorType_1.ts]
///<reference path='exportEqualErrorType_0.ts'/>
import connect = require('exportEqualErrorType_0');
connect().use(connect.static('foo')); // Error  1      The property 'static' does not exist on value of type ''.


//// [exportEqualErrorType_1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect = require("exportEqualErrorType_0");
connect().use(connect.static('foo'));
//// [exportEqualErrorType_0.js]
"use strict";
var server;
module.exports = server;
