'use strict';

import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import DrawerContent from './DrawerContent';


export default class DrawerLayout extends React.Component {
    render() {
      var navigationView = (
        <DrawerContent />
      );
      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
        >
          <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>ANDROID here!</Text>
          </View>
        </DrawerLayoutAndroid>
      );
    }
}