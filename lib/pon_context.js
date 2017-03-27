/**
 * Context of pon
 * @class PonContext
 * @param {Object} [values={}] - Context values
 */
'use strict'

const ponLogger = require('pon-logger')
const astimer = require('astimer')
const uuid = require('uuid')

/** @lends PonContext */
class PonContext {
  constructor (values = {}) {
    const s = this
    s.set(PonContext.defaults())
    s.set(values)
  }

  /**
   * Set values
   * @param {Object} values
   * @returns {PonContext} Returns this
   */
  set (values) {
    const s = this
    if (arguments.length === 2) {
      let value = arguments[ 1 ]
      let name = arguments[ 0 ]
      return s.set({ [name]: value })
    }
    s.set(values)
    return s
  }

  /**
   * Get context value
   * @param {string} name - Name of property
   * @returns {?*}
   */
  get (name) {
    const s = this
    return s[ name ]
  }

  static defaults () {
    return {
      id: uuid.v4(),
      logger: ponLogger(),
      timer: astimer()
    }
  }
}

module.exports = PonContext

