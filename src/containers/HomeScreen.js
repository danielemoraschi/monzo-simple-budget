import React from 'react';
import { View } from 'react-native';

import StatusBar from '../components/StatusBar';
//import GetBalanceButton from './GetBalanceButton';
import BalanceScreen from './BalanceScreen';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Balance',
    drawerLabel: 'Balance',
  };

  render() {
    return (
      <View>
        <StatusBar />
        <BalanceScreen />
      </View>
    );
  }
}

export default HomeScreen;