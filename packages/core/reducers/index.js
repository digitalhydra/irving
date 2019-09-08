import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import defaultState from 'reducers/defaultState';
import getIrvingConfig from 'utils/getIrvingConfig';
import getFieldFromUserConfig from 'utils/getFieldFromUserConfig';
import componentsReducer from './componentsReducer';
import routeReducer from './routeReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import visibilityReducer from './visibilityReducer';
import componentDataReducer from './componentDataReducer';

// Configure "slice" reducers.
export const reducers = {
  components: (state = defaultState.components) => state,
  componentData: componentDataReducer,
  error: errorReducer,
  loading: loadingReducer,
  route: routeReducer,
  visible: visibilityReducer,
  ...getFieldFromUserConfig(getIrvingConfig(), 'reducers', 'array'),
};
const rootSliceReducer = combineReducers(reducers);

// "State" reducers are composed together. The order they are passed into
// reduceReducers determines the order they will be run in.
const rootReducer = reduceReducers(rootSliceReducer, componentsReducer);

export default rootReducer;
