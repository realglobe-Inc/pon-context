/**
 * Create a PonContext instance
 * @function create
 * @param {...*} args
 * @returns {PonContext}
 */
'use strict'

const PonContext = require('./pon_context')

/** @lends create */
function create (...args) {
  return new PonContext(...args)
}

module.exports = create
