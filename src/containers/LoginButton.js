import { connect } from 'react-redux';
import { login, getAccounts } from '../actions/monzo';
import Button from '../components/Button';


const TITLE = 'Login';

/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title || TITLE,
    active: !state.auth.authenticated,
    user_id: state.auth.user_id,
    account_id: state.auth.account_id,
    access_token: state.auth.access_token,
  }
}

/**
 *
 * @param {*} dispatch
 * @param {*} state
 */
const dispatchLogin = (dispatch, state) => dispatch(login(
  state.auth.user_id,
  state.auth.account_id,
  state.auth.access_token
));

/**
 *
 * @param {*} dispatch
 * @param {*} state
 */
const dispatchGetAccounts = (dispatch, state) => getAccounts(
    state.auth.account_id,
    state.auth.access_token
  )
  .then(obj => dispatch(obj));

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
        dispatchGetAccounts(dispatch, state);
      }
    )
  }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default LoginButton;