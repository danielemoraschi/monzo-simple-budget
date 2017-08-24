import * as monzo from '../constants/Monzo';
import {
  LOGOUT,
  RECEIVE_ACCOUNTS,
  INVALID_CREDENTIALS,
} from '../constants/ActionTypes';


const initialState = {
  list: [],
  authenticated: false,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const accounts = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
    case INVALID_CREDENTIALS:
      return {
        ...state,
        list: [],
        authenticated: false,
      }
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        list: action.accounts,
        authenticated: true,
      }
    default:
      return state;
  }
}