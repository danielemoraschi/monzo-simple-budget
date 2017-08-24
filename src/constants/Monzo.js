export const API_ENDPOINT = 'https://api.monzo.com';
export const AUTH_ENDPOINT = 'https://auth.getmondo.co.uk';
export const BALANCE_API = 'balance';
export const ACCOUNTS_API = 'accounts';
export const TRANSACTIONS_API = 'transactions';


/**
 *
 * @param {*} json
 */
function jsonToQueryString(json) {
  return Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key]);
    }).join('&');
}

/**
 *
 * @param {*} api_name
 * @param {*} account_id
 * @param {*} queryParameters
 */
function getAPIURL(api_name, account_id, queryParameters = {}) {
  let url = `${API_ENDPOINT}/${api_name}?`;
  if (account_id) {
    url = `${url}account_id=${account_id}&`;
  }
  let fullUrl = url + jsonToQueryString(queryParameters);
  console.debug('Fetching Monzo API', fullUrl);
  return fullUrl;
}

/**
 *
 * @param {*} api_name
 * @param {*} account_id
 * @param {*} access_token
 * @param {*} queryParameters
 * @param {*} options
 */
export const fetchAPI = (
  api_name,
  account_id,
  access_token, 
  queryParameters = {}, 
  options = {}
) => {
  return fetch(getAPIURL(api_name, account_id, queryParameters), {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + access_token,
      },
      ...options
    })
    .then(
      response => response.json(),
      error => console.log('An error occured.', error)
    );
}