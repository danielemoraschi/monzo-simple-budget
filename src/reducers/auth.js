import * as monzo from '../constants/Monzo';
import {
  UPD_ACCOUNT_CREDENTIALS,
  SAVE_ACCOUNT_CREDENTIALS,
  LOGOUT,
} from '../constants/ActionTypes';


// const initialState = {
//   authenticated: false,
//   user_id: null,
//   account_id: null,
//   access_token: null,
// }

const initialState = {
  authenticated: false,
  user_id: 'user_00009IhsYAE6t4Z0SmbJab',
  account_id: 'acc_00009IhsjMDkdKdgqdlpNh',
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE1MDE1NDY2NzksImlhdCI6MTUwMTUyNTA3OSwianRpIjoidG9rXzAwMDA5TjBsMnVFRFVubU9CMlI2R1giLCJ1aSI6InVzZXJfMDAwMDlJaHNZQUU2dDRaMFNtYkphYiIsInYiOiIyIn0.DtNGAUgrHbJ0wjw5cd-oAB4q964N0Ihl35EEtCwoEEw',
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPD_ACCOUNT_CREDENTIALS:
      return {
        ...state,
        [action.key]: action.value
      }
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
        //access_token: null,
      }
    default:
      return state;
  }
}