module.exports = function(config) {
    config.set({
      // ... other configurations
      reporters: ['progress', 'junit'],
      junitReporter: {
        outputDir: 'test-results',
        outputFile: 'junit-results.xml',
        useBrowserName: false,
      },
      plugins: [
        'karma-junit-reporter'
      ],
      // ... other configurations
    });
  };
  