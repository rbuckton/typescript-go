//// [tests/cases/conformance/jsdoc/checkJsdocReturnTag1.ts] ////

//// [returns.js]
// @ts-check
/**
 * @returns {string} This comment is not currently exposed
 */
function f() {
    return "hello";
}

/**
 * @returns {string=} This comment is not currently exposed
 */
function f1() {
    return "hello world";
}

/**
 * @returns {string|number} This comment is not currently exposed
 */
function f2() {
    return 5 || "hello";
}


//// [returns.js]
function f() {
    return "hello";
}
function f1() {
    return "hello world";
}
function f2() {
    return 5 || "hello";
}
