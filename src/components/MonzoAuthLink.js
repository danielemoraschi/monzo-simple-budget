import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button,
  Linking,
  Text
} from 'react-native';


const authURL = 'https://developers.monzo.com/';

/**
 * 
 * @param {*} url 
 */
const onPress = (url) => {
  Linking
    .openURL(authURL)
    .catch(err => {
        if (! rowData.login) {
            alert('An error occurred: ' + err)
            return;
        }
    });
}

/**
 * 
 * @param {*} param0 
 */
const MonzoAuthLink = (props) => {
  return (
    <Button
      title={props.title || 'Sign in with Monzo'}
      onPress={() => onPress(authURL)}
      { ...props }
    />
  )
}

MonzoAuthLink.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
}

export default MonzoAuthLink;