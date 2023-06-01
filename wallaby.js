module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'src/**/*.spec.js',
      'src/**/*.test.js'
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typescript()
    },
  };
};
