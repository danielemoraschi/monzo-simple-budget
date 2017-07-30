import { connect } from 'react-redux';
import { getBalance } from '../actions/monzo';
import Button from '../components/Button';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  console.log(state)
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
    onPress: () => dispatch(getBalance())
  }
}

const GetBalanceButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default GetBalanceButton;