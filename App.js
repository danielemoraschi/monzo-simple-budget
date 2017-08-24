'use strict';

import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { StatusBar, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import MonzoApp from './MonzoApp';
import uiTheme from './src/constants/Theme';
import reducers from './src/reducers';


const middleware = [ thunk, multi ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
  autoRehydrate()
);

persistStore(store, {
  whitelist: [ 'auth_credentials', 'balance', 'transactions', 'budget', ],
  'storage': AsyncStorage,
},
  () => {
    console.log('Store rehydration complete.');
})

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