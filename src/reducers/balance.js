import * as monzo from '../constants/Monzo';
import {
  RECEIVE_BALANCE,
} from '../constants/ActionTypes';


const initialState = {
  balance: 0,
  currency: 'GBP',
  spend_today: 0,
  local_spend: {},
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const balance = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BALANCE:
      return {
        ...state,
        balance: action.balance,
        currency: action.currency,
        spend_today: action.spend_today,
        local_spend: action.local_spend,
      }
    default:
      return state;
  }
}