//// [tests/cases/compiler/collisionCodeGenModuleWithEnumMemberConflict.ts] ////

//// [collisionCodeGenModuleWithEnumMemberConflict.ts]
module m1 {
    enum e {
        m1, 
        m2 = m1
    }
}

//// [collisionCodeGenModuleWithEnumMemberConflict.js]
var m1;
(function (m1) {
    let e;
    (function (e) {
        e[e["m1"] = 0] = "m1";
        e[e["m2"] = 0] = "m2";
    })(e || (e = {}));
})(m1 || (m1 = {}));
