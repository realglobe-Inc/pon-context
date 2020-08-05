'use strict'

const ponLogger = require('pon-logger')
const ponWriter = require('pon-writer')
const ponWatcher = require('pon-watcher')
const ponTimer = require('pon-timer')
const { v4: uuid } = require('uuid')

/**
 * Context of pon
 * @class PonContext
 * @param {Object} [values={}] - Context values
 * @property {string} id - Context id
 * @property {PonTimer} timer - Timer instance
 * @property {PonLogger} logger - Logger instance
 * @property {PonWatcher} logger - Watcher instance
 * @property {PonWriter} logger - Writer instance
 */
class PonContext {
  constructor (values = {}) {
    this.set(PonContext.defaults())
    this.set(values)
  }

  /**
   * Set values
   * @param {Object} values
   * @returns {PonContext} Returns this
   */
  set (values) {
    if (arguments.length === 2) {
      let value = arguments[1]
      let name = arguments[0]
      return this.set({ [name]: value })
    }
    Object.assign(this, values)
    return this
  }

  /**
   * Get context value
   * @param {string} name - Name of property
   * @returns {?*}
   */
  get (name) {
    return this[name]
  }

  static defaults () {
    return {
      id: uuid(),
      logger: ponLogger(),
      timer: ponTimer(),
      writer: ponWriter(),
      watcher: ponWatcher(),
      cwd: process.cwd()
    }
  }
}

module.exports = PonContext

