const path = require('path');
const { hasFile, hasPkgProp, fromRoot } = require('../../utils');

const here = p => path.join(__dirname, p);

const useBuiltInBabelConfig = !hasFile('.babelrc') && !hasPkgProp('babel');

const jestConfig = {
  rootDir: fromRoot('src'),
};

if (useBuiltInBabelConfig) {
  jestConfig.transform = { '^.+\\.js$': here('../babel/transform') };
}

module.exports = jestConfig;
