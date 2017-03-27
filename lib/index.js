/**
 * Tasks context for pon
 * @module pon-context
 */

'use strict'

const create = require('./create')
const PonContext = require('./pon_context')

let lib = create.bind(this)

Object.assign(lib, PonContext, {
  create,
  PonContext
})

module.exports = lib
