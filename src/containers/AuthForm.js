import { connect } from 'react-redux';
import { 
  View, 
  Text,
} from 'react-native';
import { updateAccountCredentials } from '../actions/monzo';
import AuthFields from '../components/AuthFields';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
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
    onChangeText: (key, value) => dispatch(
      updateAccountCredentials(key, value)
    )
  }
}

const AuthForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthFields);

export default AuthForm;