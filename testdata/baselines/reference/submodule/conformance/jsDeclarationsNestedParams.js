//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsNestedParams.ts] ////

//// [file.js]
class X {
    /**
      * Cancels the request, sending a cancellation to the other party
      * @param {Object} error __auto_generated__
      * @param {string?} error.reason the error reason to send the cancellation with
      * @param {string?} error.code the error code to send the cancellation with
      * @returns {Promise.<*>} resolves when the event has been sent.
      */ 
    async cancel({reason, code}) {}
}

class Y {
    /**
      * Cancels the request, sending a cancellation to the other party
      * @param {Object} error __auto_generated__
      * @param {string?} error.reason the error reason to send the cancellation with
      * @param {Object} error.suberr
      * @param {string?} error.suberr.reason the error reason to send the cancellation with
      * @param {string?} error.suberr.code the error code to send the cancellation with
      * @returns {Promise.<*>} resolves when the event has been sent.
      */ 
    async cancel({reason, suberr}) {}
}


//// [file.js]
class X {
    async cancel({ reason, code }) { }
}
class Y {
    async cancel({ reason, suberr }) { }
}
