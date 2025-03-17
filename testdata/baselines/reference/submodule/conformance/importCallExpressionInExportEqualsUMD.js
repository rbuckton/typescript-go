//// [tests/cases/conformance/dynamicImport/importCallExpressionInExportEqualsUMD.ts] ////

//// [something.ts]
export = 42;

//// [index.ts]
export = async function() {
    const something = await import("./something");
};

//// [index.js]
"use strict";
module.exports = async function () {
    const something = await Promise.resolve().then(() => require("./something"));
};
//// [something.js]
"use strict";
module.exports = 42;
