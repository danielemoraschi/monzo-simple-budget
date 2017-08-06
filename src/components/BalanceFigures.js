import React from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text,
} from 'react-native';
import { Card } from 'react-native-material-ui';


const BalanceFigures = ({ balance, spend_today }) => {
  return (
    <View>
      <Card>
        <Text>Balance: {balance}</Text>
        <Text>Spent today: {spend_today}</Text>
      </Card>
    </View>
  )
};

BalanceFigures.propTypes = {
  balance: PropTypes.number.isRequired,
  spend_today: PropTypes.number.isRequired,
}

export default BalanceFigures;