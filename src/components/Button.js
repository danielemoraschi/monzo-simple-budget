import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button as NativeButton, 
  Text
} from 'react-native';

/**
 * 
 * @param {*} param0 
 */
const Button = ({ active, title, onPress }) => {
  if ( !active ) {
    return <Text>{title}</Text>
  }

  return (
    <NativeButton
      onPress={onPress}
      title={title}
    />
  )
}

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Button