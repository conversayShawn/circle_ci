const { defineConfig } = require('cypress')
const del = require('del')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const failures = results.tests.some(test => {
            return test.attempts.some(attempt => attempt.state === 'failed')
          })
          if (!failures) {
            del(results.video)
          }
        }
      })
    },
  },
})