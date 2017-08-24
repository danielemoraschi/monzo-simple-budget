import { connect } from 'react-redux';
import { 
  getBalance,
  getTransactionsSince,
} from '../actions/monzo';
import Button from '../components/Button';


const TITLE = 'Get Balance';

/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title || TITLE,
    active: state.auth.authenticated,
  }
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} state 
 */
const dispatchGetBalance = (dispatch, state) => getBalance(
    state.auth.account_id, 
    state.auth.access_token
  )
  .then(obj => dispatch(obj));

  /**
 *
 * @param {*} dispatch
 * @param {*} state
 */
const dispatchGetTransactions = (dispatch, state) => getTransactionsSince(
    state.transactions.last_transaction_id,
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
        dispatchGetBalance(dispatch, state)
        dispatchGetTransactions(dispatch, state);
      }
    )
  }
}

const GetBalanceButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default GetBalanceButton;