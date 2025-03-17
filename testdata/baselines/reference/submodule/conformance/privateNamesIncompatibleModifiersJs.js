//// [tests/cases/conformance/classes/members/privateNames/privateNamesIncompatibleModifiersJs.ts] ////

//// [privateNamesIncompatibleModifiersJs.js]
class A {
    /**
     * @public
     */
    #a = 1;

    /**
     * @private
     */
    #b = 1;

    /**
     * @protected
     */
    #c = 1;

    /**
     * @public
     */
    #aMethod() { return 1; }

    /**
     * @private
     */
    #bMethod() { return 1; }

    /**
     * @protected
     */
    #cMethod() { return 1; }

    /**
     * @public
     */
    get #aProp() { return 1; }
    /**
     * @public
     */
    set #aProp(value) { }

    /**
     * @private
     */
    get #bProp() { return 1; }
    /**
     * @private
     */
    set #bProp(value) { }

    /**
    * @protected
    */
    get #cProp() { return 1; }
    /**
     * @protected
     */
    set #cProp(value) { }
}


//// [privateNamesIncompatibleModifiersJs.js]
class A {
    #a = 1;
    #b = 1;
    #c = 1;
    #aMethod() { return 1; }
    #bMethod() { return 1; }
    #cMethod() { return 1; }
    get #aProp() { return 1; }
    set #aProp(value) { }
    get #bProp() { return 1; }
    set #bProp(value) { }
    get #cProp() { return 1; }
    set #cProp(value) { }
}
