module.exports = function(config) {
    config.set({
      reporters: ['progress', 'junit'],
      junitReporter: {
        outputDir: './junit/',
        outputFile: 'test-results.xml',
        useBrowserName: 'Chrome',
      },
      plugins: [
        'karma-junit-reporter'
      ],
      // ... other configurations
    });
  };
  