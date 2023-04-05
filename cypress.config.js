const { defineConfig } = require('cypress')
// need to install these dependencies
// npm i lodash del --save-dev
const _ = require('lodash')
const del = require('del')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const passed = _.some(results.tests, (test) => {
            return _.some(test.attempts, { state: 'passed' })
          })
          if (!passed) {
            // delete the video if the spec passed and no tests retried
            del(results.video)
          }
        }
      })
    },
  },
})