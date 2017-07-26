import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';

export default class DrawerLayout extends React.Component {
    render() {
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Drawer!</Text>
        </View>
      );
      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>ANDROID here!</Text>
          </View>
        </DrawerLayoutAndroid>
      );
    }
}