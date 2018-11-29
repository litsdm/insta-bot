import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import user from './user';
import account from './account';

const rootReducer = combineReducers({
  router,
  user,
  account
});

export default rootReducer;
