//// [tests/cases/conformance/parser/ecmascript5/ArrowFunctionExpressions/parserArrowFunctionExpression15.ts] ////

//// [fileJs.js]
false ? (param): string => param : null // Not legal JS; "Unexpected token ':'" at last colon

//// [fileTs.ts]
false ? (param): string => param : null


//// [fileTs.js]
false ? (param) => param : null;
//// [fileJs.js]
false ? (param) => param : null;
