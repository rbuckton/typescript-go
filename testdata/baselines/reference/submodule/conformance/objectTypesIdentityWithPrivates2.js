//// [tests/cases/conformance/types/typeRelationships/typeAndMemberIdentity/objectTypesIdentityWithPrivates2.ts] ////

//// [objectTypesIdentityWithPrivates2.ts]
// object types are identical structurally

class C<T> {
    private foo: T;
}

class D<T> extends C<T> {
}

function foo1(x: C<string>);
function foo1(x: C<number>); // ok
function foo1(x: any) { }

function foo2(x: D<string>);
function foo2(x: D<number>); // ok
function foo2(x: any) { }

function foo3(x: C<string>);
function foo3(x: D<number>); // ok
function foo3(x: any) { }

function foo4(x: C<number>): number; 
function foo4(x: D<number>): string; // BUG 831926
function foo4(x: any): any { }

var r = foo4(new C<number>());
var r = foo4(new D<number>());

function foo5(x: C<number>): number;
function foo5(x: C<number>): string; // error
function foo5(x: any): any { }

function foo6(x: D<number>): number;
function foo6(x: D<number>): string; // error
function foo6(x: any): any { }




//// [objectTypesIdentityWithPrivates2.js]
// object types are identical structurally
class C {
    foo;
}
class D extends C {
}
function foo1(x) { }
function foo2(x) { }
function foo3(x) { }
function foo4(x) { }
var r = foo4(new C());
var r = foo4(new D());
function foo5(x) { }
function foo6(x) { }
