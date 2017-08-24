import { Alert } from 'react-native';
import * as monzo from '../constants/Monzo';
import {
  UPD_ACCOUNT_CREDENTIALS,
  INCOMPLETE_CREDENTIALS,
  INVALID_CREDENTIALS,
  RECEIVE_ACCOUNTS,
  LOGIN,
  LOGOUT,
} from '../constants/ActionTypes';


const initialState = {
  user_id: null,
  account_id: null,
  access_token: null,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const auth_credentials = (state = initialState, action) => {
  switch (action.type) {
    case UPD_ACCOUNT_CREDENTIALS:
      return {
        ...state,
        [action.key]: action.value
      }
    case LOGIN:
      return {
        ...state,
        user_id: action.user_id,
        account_id: action.account_id,
        access_token: action.access_token,
      }
    case LOGOUT:
      return {
        ...state,
        //user_id: null,
        //account_id: null,
        //access_token: null,
      }
    case INCOMPLETE_CREDENTIALS:
      Alert.alert('Please insert authentication credentials.');
    default:
      return state;
  }
}