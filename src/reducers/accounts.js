import * as monzo from '../constants/Monzo';
import {
  LOGOUT,
  RECEIVE_ACCOUNTS,
} from '../constants/ActionTypes';


const initialState = {
  list: [],
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const accounts = (state = initialState, action) => {
  console.log('-----------------------------------------------'+action.type, '2', action);
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        list: [],
      }
    case RECEIVE_ACCOUNTS:
      console.log(RECEIVE_ACCOUNTS, 2, action.accounts)
      return {
        ...state,
        list: action.accounts,
      }
    default:
      return state;
  }
}