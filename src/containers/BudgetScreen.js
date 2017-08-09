import React from 'react';
import { View } from 'react-native';

import StatusBar from '../components/StatusBar';
import GetBalanceButton from './GetBalanceButton';
import BalanceCard from './BalanceCard';


class BudgetScreen extends React.Component {
  static navigationOptions = {
    title: 'Balance',
    drawerLabel: 'Balance',
  };

  render() {
    return (
      <View>
        <StatusBar />
        <BalanceCard />
        <GetBalanceButton />
      </View>
    );
  }
}

export default BudgetScreen;