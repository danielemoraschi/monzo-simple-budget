import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, NavigatorIOS } from 'react-native';

export default class DrawerLayout extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: { titled: 'foo' }
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>{ this.props.titled }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}