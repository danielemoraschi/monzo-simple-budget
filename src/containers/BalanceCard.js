import { connect } from 'react-redux';
import { 
  View, 
  Text,
} from 'react-native';
import BalanceFigures from '../components/BalanceFigures';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    balance: state.balance.balance,
    spend_today: state.balance.spend_today,
  }
}

const BalanceCard = connect(
  mapStateToProps,
)(BalanceFigures);

export default BalanceCard;