import React from 'react';
import { View } from 'react-native';

import AuthForm from './AuthForm';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


class DrawerScreen extends React.Component {
  static navigationOptions = {
    title: 'Login settings',
    drawerLabel: 'Login',
  };

  render() {
    return (
      <View>
        <AuthForm />
        <LoginButton />
        <LogoutButton />
      </View>
    );
  }
}

export default DrawerScreen;