//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypingWithObjectMembersAccessibility2.ts] ////

//// [subtypingWithObjectMembersAccessibility2.ts]
// Derived member is private, base member is not causes errors

class Base {
    foo: string;
}

class Derived extends Base {
    bar: string;
}

module ExplicitPublic {
    class A {
        private foo: Base;
    }

    class B extends A {
        public foo: Derived; // error
    }

    class A2 {
        private 1: Base;
    }

    class B2 extends A2 {
        public 1: Derived; // error
    }

    class A3 {
        private '1': Base;
    }

    class B3 extends A3 {
        public '1': Derived; // error
    }
}

module ImplicitPublic {
    class A {
        private foo: Base;
    }

    class B extends A {
        foo: Derived; // error
    }

    class A2 {
        private 1: Base;
    }

    class B2 extends A2 {
        1: Derived; // error
    }

    class A3 {
        private '1': Base;
    }

    class B3 extends A3 {
        '1': Derived; // error
    }
}

//// [subtypingWithObjectMembersAccessibility2.js]
// Derived member is private, base member is not causes errors
class Base {
    foo;
}
class Derived extends Base {
    bar;
}
var ExplicitPublic;
(function (ExplicitPublic) {
    class A {
        foo;
    }
    class B extends A {
        foo; // error
    }
    class A2 {
        1;
    }
    class B2 extends A2 {
        1; // error
    }
    class A3 {
        '1';
    }
    class B3 extends A3 {
        '1'; // error
    }
})(ExplicitPublic || (ExplicitPublic = {}));
var ImplicitPublic;
(function (ImplicitPublic) {
    class A {
        foo;
    }
    class B extends A {
        foo; // error
    }
    class A2 {
        1;
    }
    class B2 extends A2 {
        1; // error
    }
    class A3 {
        '1';
    }
    class B3 extends A3 {
        '1'; // error
    }
})(ImplicitPublic || (ImplicitPublic = {}));
