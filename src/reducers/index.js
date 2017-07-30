import { combineReducers } from 'redux';
import { auth } from './auth';
import { balance } from './balance';

export default combineReducers({
  auth,
  balance
});