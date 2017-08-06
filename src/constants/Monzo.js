export const API_ENDPOINT = 'https://api.monzo.com';
export const AUTH_ENDPOINT = 'https://auth.getmondo.co.uk';
export const BALANCE_API = 'balance';


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
  let url = `${API_ENDPOINT}/${api_name}?account_id=${account_id}`;
  return url + '&' + jsonToQueryString(queryParameters);
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
  api_name, account_id, 
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