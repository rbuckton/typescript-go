//// [tests/cases/conformance/decorators/class/accessor/decoratorOnClassAccessor7.ts] ////

//// [decoratorOnClassAccessor7.ts]
declare function dec1<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;
declare function dec2<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;

class A {
    @dec1 get x() { return 0; }
    set x(value: number) { }
}

class B {
    get x() { return 0; }
    @dec2 set x(value: number) { }
}

class C {
    @dec1 set x(value: number) { }
    get x() { return 0; }
}

class D {
    set x(value: number) { }
    @dec2 get x() { return 0; }
}

class E {
    @dec1 get x() { return 0; }
    @dec2 set x(value: number) { }
}

class F {
    @dec1 set x(value: number) { }
    @dec2 get x() { return 0; }
}

//// [decoratorOnClassAccessor7.js]
class A {
    @dec1
    get x() { return 0; }
    set x(value) { }
}
class B {
    get x() { return 0; }
    @dec2
    set x(value) { }
}
class C {
    @dec1
    set x(value) { }
    get x() { return 0; }
}
class D {
    set x(value) { }
    @dec2
    get x() { return 0; }
}
class E {
    @dec1
    get x() { return 0; }
    @dec2
    set x(value) { }
}
class F {
    @dec1
    set x(value) { }
    @dec2
    get x() { return 0; }
}
