import * as monzo from '../constants/Monzo';
import {
  SAVE_ACCOUNT_CREDENTIALS,
  LOGOUT,
} from '../constants/ActionTypes';


const initialState = {
  authenticated: false,
  user_id: null,
  account_id: null,
  access_token: null,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ACCOUNT_CREDENTIALS:
      return {
        ...state,
        authenticated: true,
        user_id: action.user_id,
        account_id: action.account_id,
        access_token: action.access_token,
      }
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        //user_id: null,
        //account_id: null,
        access_token: null,
      }
    default:
      return state;
  }
}