const { defineConfig } = require("cypress");
// need to install these dependencies
// npm i lodash del --save-dev
// const _ = require("lodash");
// const del = require("del");

// import {some} from "lodash";
// import del from "del";

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      // on('before:browser:launch', (browser = {}, launchOptions) => {
      //   console.log(launchOptions.args)
    
      //   if (browser.name == 'chrome') {
      //     launchOptions.args.push('--disable-gpu')
      //   }
    
      //   return launchOptions
      // }),
      // on("after:spec", (spec, results) => {
      //   if (results && results.video) {
      //     // Do we have failures for any retry attempts?
      //     const failures = _.some(results.tests, (test) => {
      //       return _.some(test.attempts, { state: "failed" });
      //     });
      //     if (!failures) {
      //       // delete the video if the spec passed and no tests retried
      //       return del(results.video);
      //     }
      //   }
      // });
    },
  },
});
