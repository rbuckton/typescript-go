//// [tests/cases/compiler/jsdocTypedefNoCrash.ts] ////

//// [export.js]
/**
 * @typedef {{
 * }}
 */
export const foo = 5;

//// [export.js]
export const foo = 5;
