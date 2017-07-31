import { connect } from 'react-redux';
import { getBalance } from '../actions/monzo';
import Button from '../components/Button';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.auth.authenticated,
  }
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => dispatch(
      (dispatch, getState) => getBalance(
        getState().auth.account_id, 
        getState().auth.access_token
      )
      .then(obj => dispatch(obj))
  )}
}

const GetBalanceButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default GetBalanceButton;