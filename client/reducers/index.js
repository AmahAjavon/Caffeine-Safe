import { combineReducers } from 'redux';
import authorizationReducer from './reducer.auth';
import requestHandlingReducer from './reducer.request-handling';
import userReducer from './reducer.user';
import caffeineReducer from './reducer.caffeine'
import tabReducer from './reducer.tab';

// Combine all reducers.
const reducers = combineReducers({
  authorizationReducer,
  requestHandlingReducer,
  userReducer,
  caffeineReducer,
  tabReducer
});

// Export root reducer for state initialization.
export default reducers;
