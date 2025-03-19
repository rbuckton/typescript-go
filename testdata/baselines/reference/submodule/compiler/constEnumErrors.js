//// [tests/cases/compiler/constEnumErrors.ts] ////

//// [constEnumErrors.ts]
const enum E {
    A
}

module E {
    var x = 1;
}

const enum E1 {
    // illegal case
    // forward reference to the element of the same enum
    X = Y,
    // forward reference to the element of the same enum
    Y = E1.Z,
    Y1 = E1["Z"]
}

const enum E2 {
    A
}

var y0 = E2[1]
var name = "A";
var y1 = E2[name];
var y2 = E2[`${name}`];

var x = E2;
var y = [E2];

function foo(t: any): void {
}

foo(E2);

const enum NaNOrInfinity {
    A = 9007199254740992,
    B = A * A,
    C = B * B,
    D = C * C,
    E = D * D,
    F = E * E, // overflow
    G = 1 / 0, // overflow
    H = 0 / 0  // NaN
}

//// [constEnumErrors.js]
var E;
(function (E) {
    E[E["A"] = 0] = "A";
})(E || (E = {}));
(function (E) {
    var x = 1;
})(E || (E = {}));
var E1;
(function (E1) {
    // illegal case
    // forward reference to the element of the same enum
    E1["X"] = E1.Y;
    if (typeof E1.X !== "string") E1[E1.X] = "X";
    // forward reference to the element of the same enum
    E1["Y"] = E1.Z;
    if (typeof E1.Y !== "string") E1[E1.Y] = "Y";
    E1["Y1"] = E1["Z"];
    if (typeof E1.Y1 !== "string") E1[E1.Y1] = "Y1";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 0] = "A";
})(E2 || (E2 = {}));
var y0 = E2[1];
var name = "A";
var y1 = E2[name];
var y2 = E2[`${name}`];
var x = E2;
var y = [E2];
function foo(t) {
}
foo(E2);
var NaNOrInfinity;
(function (NaNOrInfinity) {
    NaNOrInfinity[NaNOrInfinity["A"] = 9007199254740992] = "A";
    NaNOrInfinity[NaNOrInfinity["B"] = 8.112963841460668e+31] = "B";
    NaNOrInfinity[NaNOrInfinity["C"] = 6.582018229284824e+63] = "C";
    NaNOrInfinity[NaNOrInfinity["D"] = 4.332296397063773e+127] = "D";
    NaNOrInfinity[NaNOrInfinity["E"] = 1.876879207201175e+255] = "E";
    NaNOrInfinity[NaNOrInfinity["F"] = NaNOrInfinity.E * NaNOrInfinity.E] = "F";
    NaNOrInfinity[NaNOrInfinity["G"] = 1 / 0] = "G";
    NaNOrInfinity[NaNOrInfinity["H"] = 0 / 0] = "H"; // NaN
})(NaNOrInfinity || (NaNOrInfinity = {}));
