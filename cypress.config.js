const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {


    "experimentalSessionAndOrigin":true,
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": false,
      "json": true
    },

    //"baseUrl" : "https://opensource-demo.orangehrmlive.com",
    //"videosFolder": "cypress/Raju",

    //"videoCompression" : 0,

    "video": true,
    //"retries":{ "runMode": 2, "openMode": 3 },
    "chromeWebSecurity": false,

    "projectId": "jw48b5",
    "viewportHeight": 1024,
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 20000,

    "viewportWidth": 1024,
    //"specPattern": "**/*.feature",

    "env": {

      "cleienturl": "https://opensource-demo.orangehrmlive.com",
      //"Staging": "https://staging.opensource-demo.orangehrmlive.com"

    },
    setupNodeEvents(on, config) {
      on('task', { downloadFile })
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
