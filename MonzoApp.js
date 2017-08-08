import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import StatusBar from './src/components/StatusBar';
import uiTheme from './src/constants/Theme';
import AuthScreen from './src/containers/AuthScreen';
import BudgetScreen from './src/containers/BudgetScreen';
//import DrawerLayout from './deprecated_app/DrawerLayout';
//import DrawerContent from './deprecated_app/DrawerContent';


const MonzoApp = DrawerNavigator({
  BudgetScreen: {
    screen: BudgetScreen,
  },
  AuthScreen: {
    screen: AuthScreen,
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
