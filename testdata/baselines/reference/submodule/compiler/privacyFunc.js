//// [tests/cases/compiler/privacyFunc.ts] ////

//// [privacyFunc.ts]
module m1 {
    export class C1_public {
        private f1() {
        }
    }

    class C2_private {
    }

    export class C3_public {
        constructor (m1_c3_c1: C1_public);
        constructor (m1_c3_c2: C2_private); //error
        constructor (m1_c3_c1_2: any) {
        }

        private f1_private(m1_c3_f1_arg: C1_public) {
        }

        public f2_public(m1_c3_f2_arg: C1_public) {
        }

        private f3_private(m1_c3_f3_arg: C2_private) {
        }

        public f4_public(m1_c3_f4_arg: C2_private) { // error
        }

        private f5_private() {
            return new C1_public();
        }

        public f6_public() {
            return new C1_public();
        }

        private f7_private() {
            return new C2_private();
        }

        public f8_public() {
            return new C2_private();  // error
        }

        private f9_private(): C1_public {
            return new C1_public();
        }

        public f10_public(): C1_public {
            return new C1_public();
        }

        private f11_private(): C2_private {
            return new C2_private();
        }

        public f12_public(): C2_private { // error
            return new C2_private(); //error
        }
    }

    class C4_private {
        constructor (m1_c4_c1: C1_public);
        constructor (m1_c4_c2: C2_private);
        constructor (m1_c4_c1_2: any) {
        }
        private f1_private(m1_c4_f1_arg: C1_public) {
        }

        public f2_public(m1_c4_f2_arg: C1_public) {
        }

        private f3_private(m1_c4_f3_arg: C2_private) {
        }

        public f4_public(m1_c4_f4_arg: C2_private) {
        }


        private f5_private() {
            return new C1_public();
        }

        public f6_public() {
            return new C1_public();
        }

        private f7_private() {
            return new C2_private();
        }

        public f8_public() {
            return new C2_private();
        }


        private f9_private(): C1_public {
            return new C1_public();
        }

        public f10_public(): C1_public {
            return new C1_public();
        }

        private f11_private(): C2_private {
            return new C2_private();
        }

        public f12_public(): C2_private {
            return new C2_private();
        }
    }

    export class C5_public {
        constructor (m1_c5_c: C1_public) {
        }
    }
    
    class C6_private {
        constructor (m1_c6_c: C1_public) {
        }
    }
    export class C7_public {
        constructor (m1_c7_c: C2_private) { // error
        }
    }
    
    class C8_private {
        constructor (m1_c8_c: C2_private) {
        }
    }

    function f1_public(m1_f1_arg: C1_public) {
    }

    export function f2_public(m1_f2_arg: C1_public) {
    }

    function f3_public(m1_f3_arg: C2_private) {
    }

    export function f4_public(m1_f4_arg: C2_private) { // error
    }


    function f5_public() {
        return new C1_public();
    }

    export function f6_public() {
        return new C1_public();
    }

    function f7_public() {
        return new C2_private();
    }

    export function f8_public() {
        return new C2_private();  // error
    }


    function f9_private(): C1_public {
        return new C1_public();
    }

    export function f10_public(): C1_public {
        return new C1_public();
    }

    function f11_private(): C2_private {
        return new C2_private();
    }

    export function f12_public(): C2_private { // error
        return new C2_private(); //error
    }
}

class C6_public {
}

class C7_public {
    constructor (c7_c2: C6_public);
    constructor (c7_c1_2: any) {
    }
    private f1_private(c7_f1_arg: C6_public) {
    }

    public f2_public(c7_f2_arg: C6_public) {
    }

    private f5_private() {
        return new C6_public();
    }

    public f6_public() {
        return new C6_public();
    }

    private f9_private(): C6_public {
        return new C6_public();
    }

    public f10_public(): C6_public {
        return new C6_public();
    }
}

class C9_public {
    constructor (c9_c: C6_public) {
    }
}
  

function f4_public(f4_arg: C6_public) {
}



function f6_public() {
    return new C6_public();
}


function f10_public(): C6_public {
    return new C6_public();
}


//// [privacyFunc.js]
var m1;
(function (m1) {
    class C1_public {
        f1() {
        }
    }
    m1.C1_public = C1_public;
    class C2_private {
    }
    class C3_public {
        constructor(m1_c3_c1_2) {
        }
        f1_private(m1_c3_f1_arg) {
        }
        f2_public(m1_c3_f2_arg) {
        }
        f3_private(m1_c3_f3_arg) {
        }
        f4_public(m1_c3_f4_arg) {
        }
        f5_private() {
            return new C1_public();
        }
        f6_public() {
            return new C1_public();
        }
        f7_private() {
            return new C2_private();
        }
        f8_public() {
            return new C2_private(); // error
        }
        f9_private() {
            return new C1_public();
        }
        f10_public() {
            return new C1_public();
        }
        f11_private() {
            return new C2_private();
        }
        f12_public() {
            return new C2_private(); //error
        }
    }
    m1.C3_public = C3_public;
    class C4_private {
        constructor(m1_c4_c1_2) {
        }
        f1_private(m1_c4_f1_arg) {
        }
        f2_public(m1_c4_f2_arg) {
        }
        f3_private(m1_c4_f3_arg) {
        }
        f4_public(m1_c4_f4_arg) {
        }
        f5_private() {
            return new C1_public();
        }
        f6_public() {
            return new C1_public();
        }
        f7_private() {
            return new C2_private();
        }
        f8_public() {
            return new C2_private();
        }
        f9_private() {
            return new C1_public();
        }
        f10_public() {
            return new C1_public();
        }
        f11_private() {
            return new C2_private();
        }
        f12_public() {
            return new C2_private();
        }
    }
    class C5_public {
        constructor(m1_c5_c) {
        }
    }
    m1.C5_public = C5_public;
    class C6_private {
        constructor(m1_c6_c) {
        }
    }
    class C7_public {
        constructor(m1_c7_c) {
        }
    }
    m1.C7_public = C7_public;
    class C8_private {
        constructor(m1_c8_c) {
        }
    }
    function f1_public(m1_f1_arg) {
    }
    function f2_public(m1_f2_arg) {
    }
    m1.f2_public = f2_public;
    function f3_public(m1_f3_arg) {
    }
    function f4_public(m1_f4_arg) {
    }
    m1.f4_public = f4_public;
    function f5_public() {
        return new C1_public();
    }
    function f6_public() {
        return new C1_public();
    }
    m1.f6_public = f6_public;
    function f7_public() {
        return new C2_private();
    }
    function f8_public() {
        return new C2_private(); // error
    }
    m1.f8_public = f8_public;
    function f9_private() {
        return new C1_public();
    }
    function f10_public() {
        return new C1_public();
    }
    m1.f10_public = f10_public;
    function f11_private() {
        return new C2_private();
    }
    function f12_public() {
        return new C2_private(); //error
    }
    m1.f12_public = f12_public;
})(m1 || (m1 = {}));
class C6_public {
}
class C7_public {
    constructor(c7_c1_2) {
    }
    f1_private(c7_f1_arg) {
    }
    f2_public(c7_f2_arg) {
    }
    f5_private() {
        return new C6_public();
    }
    f6_public() {
        return new C6_public();
    }
    f9_private() {
        return new C6_public();
    }
    f10_public() {
        return new C6_public();
    }
}
class C9_public {
    constructor(c9_c) {
    }
}
function f4_public(f4_arg) {
}
function f6_public() {
    return new C6_public();
}
function f10_public() {
    return new C6_public();
}
