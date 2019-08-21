import irvingDefaultConfig from 'config/irving.config.default';
import merge from 'lodash/fp/merge';
import userConfig from 'irving.config.js';

export default function getIrvingConfig() {
  // console.log(irvingDefaultConfig, userConfig, module.hot);

  return merge(
    userConfig,
    irvingDefaultConfig,
  );
}

if (module.hot) {
  module.hot.accept();
}
