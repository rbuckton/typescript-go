//// [tests/cases/compiler/unusedPrivateVariableInClass1.ts] ////

//// [unusedPrivateVariableInClass1.ts]
class greeter {
    private x: string;
}

//// [unusedPrivateVariableInClass1.js]
class greeter {
    x;
}
