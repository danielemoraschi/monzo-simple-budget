'use strict';

import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

import MonzoApp from './src/containers/MonzoApp';
import uiTheme from './src/constants/Theme';
import reducers from './src/reducers';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <MonzoApp />
        </ThemeProvider>
      </Provider>
    );
  }
}