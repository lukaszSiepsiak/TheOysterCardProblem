const webpackConfig = require("./webpack.dev.config");

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["test/*.ts", "test/*.js"],
    exclude: [],
    preprocessors: {
      "test/**/*.ts": ["webpack"],
      "test/**/*.js": ["webpack"],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      mode: webpackConfig.mode,
      devtool: "inline-source-map",
    },

    reporters: ["spec"],

    // port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // // start these browsers
    // // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // ChromeHeadless open tests only in terminal, there is no need to open browser
    browsers: ["ChromeHeadless"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
