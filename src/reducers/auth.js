import * as monzo from '../constants/Monzo';
import {
  LOGOUT,
  RECEIVE_ACCOUNTS,
  INVALID_CREDENTIALS,
} from '../constants/ActionTypes';


const initialState = {
  accounts: [],
  authenticated: false,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
    case INVALID_CREDENTIALS:
      return {
        ...state,
        accounts: [],
        authenticated: false,
      }
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts,
        authenticated: true,
      }
    default:
      return state;
  }
}