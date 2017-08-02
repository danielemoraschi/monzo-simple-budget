import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import StatusBar from './src/components/StatusBar';
import uiTheme from './src/constants/Theme';
import DrawerScreen from './src/containers/DrawerScreen';
import HomeScreen from './src/containers/HomeScreen';
//import DrawerLayout from './deprecated_app/DrawerLayout';
//import DrawerContent from './deprecated_app/DrawerContent';


const MonzoApp = DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  DrawerScreen: {
    screen: DrawerScreen,
  },
},{
  //contentComponent: props => <DrawerContent {...props} />,
  contentOptions: {
    //activeTintColor: uiTheme.palette.PRIMARY_COLOR,
    style: {
      borderTopWidth: 24,
      borderTopColor: 'rgba(0, 0, 0, 0.20)',
    },
  }
});

export default MonzoApp;
