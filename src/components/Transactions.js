import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { Card } from 'react-native-material-ui';

import Transaction from './Transaction';


/**
 * 
 * @param {*} param0 
 */
const Transactions = ({ list }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={list}
      renderItem={({ item }) => {
        return <Transaction 
          { ...item }
        />
      }}
    />
  )
};

Transactions.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
    Transaction.propTypes
  )),
}

Transactions.defaultState = {
  list: [],
};

export default Transactions;