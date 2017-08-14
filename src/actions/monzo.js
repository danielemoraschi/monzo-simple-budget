import * as monzo from '../constants/Monzo';
import {
  UPD_ACCOUNT_CREDENTIALS,
  LOGIN,
  INCOMPLETE_CREDENTIALS,
  REQUEST_BALANCE,
  RECEIVE_BALANCE,
  RECEIVE_ACCOUNTS,
  LOGOUT,
} from '../constants/ActionTypes';


/**
 *
 * @param {*} client_id
 * @param {*} client_secret
 */
export const login = (user_id, account_id, access_token) => {
  if (!user_id || !account_id || !access_token) {
    return {
      type: INCOMPLETE_CREDENTIALS,
    };
  }
  return {
    type: LOGIN,
    user_id,
    account_id,
    access_token,
  }
}

/**
 *
 * @param {*} key
 * @param {*} value
 */
export const updateAccountCredentials = (key, value) => {
  return {
    type: UPD_ACCOUNT_CREDENTIALS,
    key,
    value,
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
function receiveAccount(json) {
  return {
    type: RECEIVE_ACCOUNTS,
    accounts: json.accounts,
  }
}

/**
 *
 * @param {*} account_id
 * @param {*} access_token
 */
export const getAccounts = (account_id, access_token) => {
  return monzo.fetchAPI(
    monzo.ACCOUNTS_API,
    account_id,
    access_token
  )
  .then(json => receiveAccount(json));
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
 * @param {*} account_id
 * @param {*} access_token
 */
export const getBalance = (account_id, access_token) => {
  return monzo.fetchAPI(
    monzo.BALANCE_API,
    account_id,
    access_token
  )
  .then(json => receiveBalance(json));
}

/**
 *
 * @param {*} account_id
 * @param {*} access_token
 */
export const getTransactionsSince = (last_transaction_id, account_id, access_token) => {
  return monzo.fetchAPI(
    monzo.BALANCE_API,
    account_id,
    access_token,
    {
      since: last_transaction_id
    }
  )
  .then(json => json);
}