/**
 * Created by dmoraschi on 01/01/2017.
 */
'use strict';

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View, Text, NavigatorIOS, Button } from 'react-native';

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

    __render() {
      return (
        <Drawer
          type="overlay"
          content={<DrawerContent />}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={STYLE.Drawer}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
            <MyScene />
        </Drawer>
      );
    }

    render() {
        return (
          <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            captureGestures={true}
            negotiatePan={true}
            content={<DrawerContent />}
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
