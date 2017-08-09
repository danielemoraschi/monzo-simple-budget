import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import StatusBar from './src/components/StatusBar';
import uiTheme from './src/constants/Theme';
import AuthScreen from './src/containers/AuthScreen';
import BudgetScreen from './src/containers/BudgetScreen';
import DrawerContent from './src/containers/DrawerContent';


const MonzoApp = DrawerNavigator({
  BudgetScreen: {
    screen: BudgetScreen,
  },
  AuthScreen: {
    screen: AuthScreen,
  },
},{
  contentComponent: props => <DrawerContent {...props} />,
  contentOptions: {
    style: {
      marginTop: 0,
    },
  }
});

export default MonzoApp;
