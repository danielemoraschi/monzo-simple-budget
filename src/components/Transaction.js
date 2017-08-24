import React from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text,
} from 'react-native';
import { Card } from 'react-native-material-ui';


const Transaction = ({
  id,
  account_balance, 
  amount,
  created,
  description,
  notes,
  is_load,
  settled,
  category,
  include_in_spending,
}) => {
  return (
    <View>
      <Card>
        <Text>id: {id}</Text>
        <Text>account_balance: {account_balance}</Text>
        <Text>amount: {amount}</Text>
        <Text>created: {created}</Text>
        <Text>description: {description}</Text>
        <Text>notes: {notes}</Text>
        <Text>is_load: {is_load}</Text>
        <Text>settled: {settled}</Text>
        <Text>category: {category}</Text>
        <Text>include_in_spending: {include_in_spending}</Text>
      </Card>
    </View>
  )
};

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  account_balance: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  is_load: PropTypes.bool.isRequired,
  settled: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  include_in_spending: PropTypes.bool.isRequired,
}

export default Transaction;