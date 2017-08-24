import * as monzo from '../constants/Monzo';
import {
  RECEIVE_TRANSACTIONS,
} from '../constants/ActionTypes';


const initialState = {
  list: [],
  last_transaction_id: null,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        list: action.list,
        last_transaction_id: (action.list.length && action.list[action.list.length-1].id) 
          || state.last_transaction_id,
      }
    default:
      return state;
  }
}