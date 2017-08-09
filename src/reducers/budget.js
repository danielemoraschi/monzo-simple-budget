import * as monzo from '../constants/Monzo';
import {
  RECEIVE_BALANCE,
} from '../constants/ActionTypes';


const initialState = {
  letf_to_spend: 0,
  daily_budget: 0,
  live_letf_to_spend: 0,
  live_daily_budget: 0,
  start_date: null,
  end_date: null,
  income: null,
  last_transaction_id: null,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const budget = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BALANCE:
      return {
        ...state,
        letf_to_spend: state.live_letf_to_spend - action.spend_today,
      }
    case INIT:
      return {
        ...state,
        live_letf_to_spend: state.letf_to_spend - action.spend_today,
      }
    default:
      return state;
  }
}