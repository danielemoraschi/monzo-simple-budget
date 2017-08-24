import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-material-ui';

import StatusBar from '../components/StatusBar';
import MonzoAuthLink from '../components/MonzoAuthLink';
import AuthForm from './AuthForm';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Account settings',
    drawerLabel: 'Account',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name={'person'} color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
        <StatusBar />
        <AuthForm />
        <LoginButton navigation={this.props.navigation} />
        <LogoutButton />
        <MonzoAuthLink />
      </View>
    );
  }
}

export default AuthScreen;