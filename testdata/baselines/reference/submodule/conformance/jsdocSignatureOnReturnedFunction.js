//// [tests/cases/conformance/jsdoc/jsdocSignatureOnReturnedFunction.ts] ////

//// [jsdocSignatureOnReturnedFunction.js]
function f1() {
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    return (a, b) => {
        return a + b;
    }
}

function f2() {
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    return function (a, b){
        return a + b;
    }
}

function f3() {
    /** @type {(a: number, b: number) => number} */
    return (a, b) => {
        return a + b;
    }
}

function f4() {
    /** @type {(a: number, b: number) => number} */
    return function (a, b){
        return a + b;
    }
}


//// [jsdocSignatureOnReturnedFunction.js]
function f1() {
    return (a, b) => {
        return a + b;
    };
}
function f2() {
    return function (a, b) {
        return a + b;
    };
}
function f3() {
    return (a, b) => {
        return a + b;
    };
}
function f4() {
    return function (a, b) {
        return a + b;
    };
}
