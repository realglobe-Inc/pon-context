/**
 * Test case for ponContext.
 * Runs with mocha.
 */
'use strict'

const PonContext = require('../lib/pon_context.js')
const { ok } = require('assert')
const co = require('co')

describe('pon-context', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon context', () => co(function * () {
    let { id, timer, logger } = new PonContext()
    ok(id)
    ok(timer)
    ok(logger)
    timer.tick()
    logger.debug('hoge')
  }))
})

/* global describe, before, after, it */
