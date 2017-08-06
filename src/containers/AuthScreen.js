import React from 'react';
import { View } from 'react-native';

import StatusBar from '../components/StatusBar';
import MonzoAuthLink from '../components/MonzoAuthLink';
import AuthForm from './AuthForm';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Login settings',
    drawerLabel: 'Login',
  };

  render() {
    return (
      <View>
        <StatusBar />
        <AuthForm />
        <LoginButton />
        <LogoutButton />
        <MonzoAuthLink />
      </View>
    );
  }
}

export default AuthScreen;