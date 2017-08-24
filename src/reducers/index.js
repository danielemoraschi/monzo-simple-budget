import { combineReducers } from 'redux';
import { auth } from './auth';
import { balance } from './balance';
import { accounts } from './accounts';
import { transactions } from './transactions';

export default combineReducers({
  auth,
  balance,
  accounts,
  transactions,
});