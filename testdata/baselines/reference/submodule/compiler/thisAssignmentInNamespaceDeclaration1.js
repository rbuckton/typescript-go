//// [tests/cases/compiler/thisAssignmentInNamespaceDeclaration1.ts] ////

//// [a.js]
module foo {
    this.bar = 4;
}

//// [b.js]
namespace blah {
    this.prop = 42;
}


//// [b.js]
var blah;
(function (blah) {
    this.prop = 42;
})(blah || (blah = {}));
//// [a.js]
var foo;
(function (foo) {
    this.bar = 4;
})(foo || (foo = {}));
