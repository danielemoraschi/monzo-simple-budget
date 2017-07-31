import React from 'react';
import { StackNavigator } from 'react-navigation';
import { 
  View, 
  Text, 
  StatusBar 
} from 'react-native';

import AuthForm from './AuthForm';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import GetBalanceButton from './GetBalanceButton';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
          <StatusBar barStyle="dark-content" />
          <AuthForm />
          <LoginButton title={'Login'} />
          <LogoutButton title={'Logout'} />
          <GetBalanceButton title={'Get Balance'} />
      </View>
    );
  }
}


const MonzoApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default MonzoApp;