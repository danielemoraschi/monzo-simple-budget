import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-material-ui';

import StatusBar from '../components/StatusBar';
import GetBalanceButton from './GetBalanceButton';
import BalanceCard from './BalanceCard';
import TransactionList from './TransactionList';


class BudgetScreen extends React.Component {
  static navigationOptions = {
    title: 'Budget',
    drawerLabel: 'Budget',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name={'account-balance-wallet'} color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
        <StatusBar />
        <GetBalanceButton />
        <BalanceCard />
        <TransactionList />
      </View>
    );
  }
}

export default BudgetScreen;