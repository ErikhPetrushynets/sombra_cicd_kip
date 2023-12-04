module.exports = function(config) {
    config.set({
        reporters: ['junit'],
        junitReporter: {
          outputDir: process.env.JUNIT_REPORT_PATH,
          outputFile: process.env.JUNIT_REPORT_NAME,
          useBrowserName: false
        },
      plugins: [
        'karma-junit-reporter'
      ],
      // ... other configurations
    });
  };
  