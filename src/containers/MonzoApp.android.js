import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import StatusBar from '../components/StatusBar';
import uiTheme from '../constants/Theme';
import DrawerScreen from './DrawerScreen';
import HomeScreen from './HomeScreen';
//import DrawerLayout from '../../deprecated_app/DrawerLayout';
import DrawerContent from '../../deprecated_app/DrawerContent';


const MonzoApp = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: DrawerScreen,
  },
},{
  contentComponent: props => <DrawerContent {...props} />,
  contentOptions: {
    activeTintColor: uiTheme.palette.PRIMARY_COLOR,
    style: {
      borderTopWidth: 24,
      borderTopColor: 'rgba(0, 0, 0, 0.20)',
    },
  }
});

export default MonzoApp;
