// const path = require('path');

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          actions: './actions',
          assets: './assets',
          reducers: './reducers',
          config: './config',
          components: './components',
        },
      },
    ],
  ],
  presets: [
    require.resolve('@irving/babel-preset-irving'),
  ],
};
