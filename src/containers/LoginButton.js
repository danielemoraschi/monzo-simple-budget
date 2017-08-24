import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { login, getAccounts } from '../actions/monzo';
import Button from '../components/Button';
import {
  INVALID_CREDENTIALS,
  RECEIVE_ACCOUNTS,
} from '../constants/ActionTypes';

const TITLE = 'Login';

const alertInvalidCredentials = () => {
  Alert.alert(
    'Please ensure you have valid credentials.'
  );
}

/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title || TITLE,
    active: !state.auth.authenticated,
    user_id: state.auth_credentials.user_id,
    account_id: state.auth_credentials.account_id,
    access_token: state.auth_credentials.access_token,
  }
}

/**
 *
 * @param {*} dispatch
 * @param {*} state
 */
const dispatchLogin = (dispatch, state) => dispatch(login(
  state.auth_credentials.user_id,
  state.auth_credentials.account_id,
  state.auth_credentials.access_token
));

/**
 *
 * @param {*} dispatch
 * @param {*} state
 */
const dispatchGetAccounts = (dispatch, state, ownProps) => getAccounts(
    state.auth_credentials.account_id,
    state.auth_credentials.access_token
  )
  .then(obj => {
    if (obj.type === RECEIVE_ACCOUNTS) {
      ownProps.navigation.navigate('BudgetScreen');
    } else {
      alertInvalidCredentials();
    }
    return dispatch(obj)
  });

/**
 *
 * @param {*} dispatch
 * @param {*} ownProps
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => dispatch(
      (dispatch, getState) => {
        let state = getState();
        dispatchLogin(dispatch, state);
        dispatchGetAccounts(dispatch, state, ownProps);
      }
    )
  }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default LoginButton;