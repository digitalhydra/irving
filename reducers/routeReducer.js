import { LOCATION_CHANGE } from 'actions/types';
import { route as defaultState } from 'reducers/defaultState';

/**
 * Handle Redux actions operating on the route state slice.
 * @param {object} routeState - route state slice
 * @param {{type payload}} action - Redux action
 * @returns {object} - The updated route state
 */
export default function componentReducer(routeState = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_CHANGE:
      return payload;

    default:
      return routeState;
  }
}
