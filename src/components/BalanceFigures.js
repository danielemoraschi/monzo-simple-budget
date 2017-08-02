import React from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text,
} from 'react-native';


const BalanceFigures = ({ balance, spend_today }) => {
  return (
    <View>
      <Text>Balance: {balance}</Text>
      <Text>Spent today: {spend_today}</Text>
    </View>
  )
};

BalanceFigures.propTypes = {
  balance: PropTypes.number.isRequired,
  spend_today: PropTypes.number.isRequired,
}

export default BalanceFigures;