'use strict';

module.exports = {
  jsLint: {
    node: true,
    overrides: [
      {
        files: ['test/**'],
        jest: true
      }
    ]
  }
};
