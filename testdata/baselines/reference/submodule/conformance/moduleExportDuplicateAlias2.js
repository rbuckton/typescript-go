//// [tests/cases/conformance/salsa/moduleExportDuplicateAlias2.ts] ////

//// [moduleExportAliasDuplicateAlias.js]
module.exports.apply = undefined;
function a() { }
module.exports.apply = a;
module.exports.apply = a;
module.exports.apply()

//// [test.js]
const { apply } = require('./moduleExportAliasDuplicateAlias')
apply()


//// [test.js]
const { apply } = require('./moduleExportAliasDuplicateAlias');
apply();
