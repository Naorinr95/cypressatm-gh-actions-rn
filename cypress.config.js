const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: false,
    json: true
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // no plugin needed for mochawesome
    },
    experimentalStudio: true,
  },
});
