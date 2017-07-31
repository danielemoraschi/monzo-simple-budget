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
          <StatusBar
              barStyle="light-content"
          />
          <Text>Hello, Monzo APP!</Text>
          <LoginButton 
            user_id={'user_00009IhsYAE6t4Z0SmbJab'} 
            account_id={'acc_00009IhsjMDkdKdgqdlpNh'} 
            access_token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE1MDE1NDIyMzAsImlhdCI6MTUwMTUyMDYzMCwianRpIjoidG9rXzAwMDA5TjBlUWdmUXJxb2h0d3JQUngiLCJ1aSI6InVzZXJfMDAwMDlJaHNZQUU2dDRaMFNtYkphYiIsInYiOiIyIn0.bYz7SV10flRV7hN-sofGUOe-xvCw14AvNRVmfvYHMY4'}
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