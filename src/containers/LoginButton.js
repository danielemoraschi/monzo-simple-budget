import { connect } from 'react-redux';
import { saveAccountCredentials } from '../actions/monzo';
import Button from '../components/Button';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: !state.auth.authenticated,
    user_id: state.auth.user_id,
    account_id: state.auth.account_id,
    access_token: state.auth.access_token,
  }
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => {
      dispatch(
        saveAccountCredentials(
          ownProps.user_id, 
          ownProps.account_id, 
          ownProps.access_token
        )
      )
    }
  }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default LoginButton;