/**
 * Created by dmoraschi on 01/01/2017.
 */
'use strict';

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View, Text, NavigatorIOS, Button } from 'react-native';
import { ControlPanel } from './';

import DrawerContent from './DrawerContent';
import STYLE from './styles';

let nextIndex = 0;

class MyScene extends Component {
  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward = () => {
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex++,
    });
  }

  render() {
    return (
      <View style={{top:100}}>
        <Text>Current Scene: { this.props.title }</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    )
  }
}

class DrawerLayout extends Component {
    closeDrawer = () => {
      this._drawer.close()
    };

    openDrawer = () => {
      this._drawer.open()
    };

    navigator = () => {
      this.closeDrawer();
      return this.refs.navigator;
    };

    render() {
        let controlPanel = <DrawerContent />;
        return (
          <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            captureGestures={true}
            negotiatePan={true}
            content={controlPanel}
            tapToClose={true}
            openDrawerOffset={0.15}
            panCloseMask={0.5}
            closedDrawerOffset={-3}
            styles={STYLE.Drawer}
            tweenDuration={150}
            tweenEasing="linear"
            useInteractionManager={true}
            panThreshold={1}
            elevation={1}
            tweenHandler={(ratio) => ({
              main: {
                  opacity: 1,
              },
              mainOverlay: {
                  //opacity:(2-ratio)/2,
                  opacity: ratio / 1.5,
                  backgroundColor: 'black',
              }
            })}
          >
            <NavigatorIOS
              ref="navigator"
              initialRoute={{
                component: MyScene,
                title: 'My Initial Scene',
                passProps: { myProp: 'foo' },
              }}
              style={{flex: 1}}
            />
          </Drawer>
        );
    }
  }

export default DrawerLayout;
