//// [tests/cases/compiler/noCrashOnParameterNamedRequire.ts] ////

//// [index.js]
(function(require, module, exports){
    const mod = require("./mod");
    mod.foo;
})(null, null, null);

//// [index.js]
(function (require, module, exports) {
    const mod = require("./mod");
    mod.foo;
})(null, null, null);
