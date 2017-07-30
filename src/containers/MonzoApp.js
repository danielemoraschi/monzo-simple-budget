import React from 'react';
import { StackNavigator } from 'react-navigation';
import { 
  View, 
  Text, 
  StatusBar 
} from 'react-native';

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
        <Text>Hello, Monzo APP!</Text>
        <LoginButton 
          user_id={'user_00009IhsYAE6t4Z0SmbJab'} 
          account_id={'acc_00009IhsjMDkdKdgqdlpNh'} 
          access_token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE1MDE0Njk1NzksImlhdCI6MTUwMTQ0Nzk3OSwianRpIjoidG9rXzAwMDA5TXl1TWpTVmt5OURxNWpPTWIiLCJ1aSI6InVzZXJfMDAwMDlJaHNZQUU2dDRaMFNtYkphYiIsInYiOiIyIn0._PUKO5JrxvDbJ6CCJz8jA4nAHEExl-ciOe9Wwyv8kDc'}
          title={'Login'}
        />
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