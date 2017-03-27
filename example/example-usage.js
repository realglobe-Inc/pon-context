'use strict'

const ponContext = require('pon-context')

async function myCustomPonTask (ctx) {
  let { logger } = ctx

  logger.debug('Do some custom staff')
}

{
  let ctx = ponContext({})
  myCustomPonTask(ctx)
}
