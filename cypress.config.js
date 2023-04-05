const { defineConfig } = require('cypress')
// need to install these dependencies
// npm i lodash del --save-dev
// const _ = require('lodash')
const del = require('del')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          let arr1 = results.tests
          let arr2 = test.attempts
          // Do we have failures for any retry attempts?
          const failures = arr1.some( (test) => {
            return arr2.some( { state: 'failed' })
          })
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            return del(results.video)
          }
        }
      })
    },
  },
})