#!/usr/bin/env node

const NODE_VERSION = Number(process.version.slice(1).split('.')[0]);

if (NODE_VERSION < 8) {
  throw new Error(
    'mango-scripts requires Node v8 or above, please upgrade your version of Node.',
  );
}

require('../src/index');
