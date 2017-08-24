import { combineReducers } from 'redux';
import { auth_credentials } from './auth-credentials';
import { balance } from './balance';
import { auth } from './auth';
import { transactions } from './transactions';

export default combineReducers({
  auth_credentials,
  auth,
  balance,
  transactions,
});