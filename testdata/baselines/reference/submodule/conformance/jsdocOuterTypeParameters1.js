//// [tests/cases/conformance/jsdoc/jsdocOuterTypeParameters1.ts] ////

//// [jsdocOuterTypeParameters1.js]
/** @return {T} */
const dedupingMixin = function(mixin) {};

 /** @template {T} */
const PropertyAccessors = dedupingMixin(() => {
  class Bar {
    static bar() { this.prototype.foo(); }
  }
});



//// [jsdocOuterTypeParameters1.js]
const dedupingMixin = function (mixin) { };
const PropertyAccessors = dedupingMixin(() => {
    class Bar {
        static bar() { this.prototype.foo(); }
    }
});
