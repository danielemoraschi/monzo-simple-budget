import React from 'react';
import { View } from 'react-native';
import StatusBar from '../components/StatusBar';

import GetBalanceButton from './GetBalanceButton';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Balance',
    drawerLabel: 'Balance',
  };

  render() {
    return (
      <View>
        <StatusBar />
        <GetBalanceButton />
      </View>
    );
  }
}

export default HomeScreen;