import * as monzo from '../constants/Monzo';
import {
  SAVE_ACCOUNT_CREDENTIALS,
  REQUEST_BALANCE,
  RECEIVE_BALANCE,
  LOGOUT,
} from '../constants/ActionTypes';


/**
 * 
 * @param {*} client_id 
 * @param {*} client_secret 
 */
export const saveAccountCredentials = (user_id, account_id, access_token) => {
  return {
    type: SAVE_ACCOUNT_CREDENTIALS,
    user_id,
    account_id,
    access_token,
  }
}

/**
 * 
 */
export const logout = () => {
  return {
    type: LOGOUT
  }
}

/**
 * 
 * @param {*} json 
 */
function receiveBalance(json) {
  return {
    type: RECEIVE_BALANCE,
    balance: json.balance,
    currency: json.currency,
    spend_today: json.spend_today,
    local_spend: json.local_spend,
  }
}

/**
 * 
 */
export const getBalance = () => {
  return function (dispatch, getState) {
    let authState = getState().auth;
    return fetch(`${monzo.API_ENDPOINT}/balance?account_id=${authState.account_id}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + authState.access_token,
        }
      })
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => dispatch(receiveBalance(json)));
  }
}