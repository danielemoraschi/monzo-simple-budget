import { connect } from 'react-redux';
import Transactions from '../components/Transactions';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.transactions.list,
  }
}

const TransactionList = connect(
  mapStateToProps,
)(Transactions);

export default TransactionList;