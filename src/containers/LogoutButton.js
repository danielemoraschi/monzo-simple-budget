import { connect } from 'react-redux';
import { logout } from '../actions/monzo';
import Button from '../components/Button';


/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.auth.authenticated
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
        logout()
      )
    }
  }
}

const LogoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default LogoutButton;