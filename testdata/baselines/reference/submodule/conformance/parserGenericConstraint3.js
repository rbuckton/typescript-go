//// [tests/cases/conformance/parser/ecmascript5/Generics/parserGenericConstraint3.ts] ////

//// [parserGenericConstraint3.ts]
class C<T extends List<T>> {
}

//// [parserGenericConstraint3.js]
class C {
}
