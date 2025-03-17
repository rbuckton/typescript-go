//// [tests/cases/conformance/internalModules/DeclarationMerging/ModuleAndFunctionWithSameNameAndCommonRoot.ts] ////

//// [module.ts]
module A {
    export module Point {
        export var Origin = { x: 0, y: 0 };
    }
}

//// [function.ts]
module A {
    // duplicate identifier error
    export function Point() {
        return { x: 0, y: 0 };
    }
}

//// [simple.ts]
module B {

    export module Point {
        export var Origin = { x: 0, y: 0 };
    }

    // duplicate identifier error
    export function Point() {
        return { x: 0, y: 0 };
    }
}


//// [simple.js]
var B;
(function (B) {
    let Point;
    (function (Point) {
        Point.Origin = { x: 0, y: 0 };
    })(Point = B.Point || (B.Point = {}));
    function Point() {
        return { x: 0, y: 0 };
    }
    B.Point = Point;
})(B || (B = {}));
//// [function.js]
var A;
(function (A) {
    function Point() {
        return { x: 0, y: 0 };
    }
    A.Point = Point;
})(A || (A = {}));
//// [module.js]
var A;
(function (A) {
    let Point;
    (function (Point) {
        Point.Origin = { x: 0, y: 0 };
    })(Point = A.Point || (A.Point = {}));
})(A || (A = {}));
