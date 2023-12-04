module.exports = function(config) {
    config.set({
      reporters: ['progress', 'junit'],
      junitReporter: {
        outputDir: 'test-results',
        outputFile: 'junit-results.xml',
        useBrowserName: 'Chrome',
      },
      plugins: [
        'karma-junit-reporter'
      ],
      // ... other configurations
    });
  };
  