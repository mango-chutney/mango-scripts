module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.{scss,css}',
      options: {
        singleQuote: false,
      },
    },
  ],
};
