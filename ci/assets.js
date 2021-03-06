#!/usr/bin/env node
/**
 * Prepare asset files
 */
'use strict'

process.chdir(`${__dirname}/..`)

const co = require('co')
const apeTasking = require('ape-tasking')
const filecopy = require('filecopy')
const path = require('path')
const { images } = require('pon-assets/lib/paths')

apeTasking.runTasks('assets', [
  () => co(function * () {
    for (let name of Object.keys(images)) {
      let filename = images[ name ]
      let result = yield filecopy(filename, `assets/images/${path.basename(filename)}`, {
        mkdirp: true,
        force: true,
        mode: '644'
      })
      Object.keys(result).forEach((filename) =>
        console.log(`File generated: ${filename}`)
      )
    }
  })
])
