'use strict';

import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';
import { StatusBar } from 'react-native';
import DrawerLayout from './app/DrawerLayout';
import STYLE from './app/styles';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <StatusBar
            backgroundColor={STYLE.Theme.palette.secondaryColor}
            barStyle="light-content"
        />
        <ThemeProvider uiTheme={STYLE.Theme}>
            <DrawerLayout />
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
