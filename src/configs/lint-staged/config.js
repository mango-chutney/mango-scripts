const { resolveBin } = require('../../utils');

const mangoScripts = resolveBin('mango-scripts');

module.exports = {
  linters: {
    '**/*.+(js|jsx)': [`${mangoScripts} format`, 'git add'],
  },
};
