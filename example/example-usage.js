'use strict'

const ponContext = require('pon-context')

async function myCustomPonTask (ctx) {

}

{
  let ctx = ponContext({})
  myCustomPonTask(ctx)
}
