import { connect } from 'react-redux';
import { saveAccountCredentials } from '../actions/monzo';
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
const dispatchSaveAccountCredentials = (state) => saveAccountCredentials(
  state.auth.user_id, 
  state.auth.account_id, 
  state.auth.access_token
);

/**
 * 
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => dispatch(
      (dispatch, getState) => dispatch(
        dispatchSaveAccountCredentials(getState())
      )
    )
  }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default LoginButton;