module.exports = function(config) {
    config.set({
        reporters: ['progress', 'junit'],
        junitReporter: {
          outputDir: 'test-results',  // Specify the directory for JUnit XML reports
          outputFile: 'junit-results.xml',  // Specify the file name
          useBrowserName: false
        },
    });
  };