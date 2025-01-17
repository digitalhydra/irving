const path = require('path');
const paths = require('./paths');

const componentGlobs = {
  utility: path.join(paths.appRoot, 'components/**/*.js'),
  hoc: path.join(paths.appRoot, 'components/hoc/**/*.js'),
  form: path.join(paths.appRoot, 'components/form/*.js'),
  helpers: path.join(paths.appRoot, 'components/helpers/**/*.js'),
};

module.exports = {
  title: 'Irving',
  require: [paths.styleguideRoot],
  sections: [
    {
      name: 'Introduction and setup',
      content: path.join(paths.appRoot, 'README.md'),
    },
    {
      name: 'Usage Documentation',
      sections: [
        {
          name: 'Concepts',
          content: path.join(paths.appRoot, 'documentation/concepts.md'),
        },
      ],
    },
    {
      name: 'Components',
      content: path.join(paths.appRoot, 'components/readme.md'),
      sections: [
        {
          name: 'Utility Components',
          content: path.join(paths.appRoot, 'components/utilityComponents.md'),
          components: componentGlobs.utility,
          ignore: [
            componentGlobs.form,
            componentGlobs.hoc,
            componentGlobs.helpers,
          ],
        },
        {
          name: 'Form Components',
          content: path.join(paths.appRoot, 'components/form/forms.md'),
          components: componentGlobs.form,
        },
        {
          name: 'Higher-Order Components',
          content: path.join(paths.appRoot, 'components/hoc/hoc.md'),
          components: componentGlobs.hoc,
        },
        {
          name: 'Helper Components',
          content: path.join(paths.appRoot, 'components/helpers/helpers.md'),
          components: componentGlobs.helpers,
        },
      ],
    },
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(paths.styleguideRoot, 'components/wrapper.js'),
  },
  styleguideDir: paths.styleguideRoot,
  webpackConfig: {
    ...require('./webpack.config.js')({}, { mode: process.env.NODE_ENV })
      .find((config) => config.name === 'client'),
    // Recreate aliases as we can't use the same babel aliases for styleguide
    resolve: {
      alias: {
        assets: path.join(paths.appRoot, './assets'),
        actions: path.join(paths.appRoot, './actions'),
        components: path.join(paths.appRoot, './components'),
        config: path.join(paths.appRoot, './config'),
        reducers: path.join(paths.appRoot, './reducers'),
        sagas: path.join(paths.appRoot, './sagas'),
        selectors: path.join(paths.appRoot, './selectors'),
        services: path.join(paths.appRoot, './services'),
        utils: path.join(paths.appRoot, './utils'),
      }
    }
  },
};
