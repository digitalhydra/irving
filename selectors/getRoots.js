import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

/**
 * Select the api root component names.
 * @param {object} state - Redux state
 * @return {function} - Redux selector
 */
const getRoots = createSelector(
  [
    get('components.defaults'),
  ],
  (defaults) => defaults.map((component) => component.name),
);

export default getRoots;
