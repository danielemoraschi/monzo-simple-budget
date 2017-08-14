import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button as NativeButton, 
} from 'react-native';


/**
 *
 * @param {*} param0
 */
const Button = ({ active, title, onPress }) => {
  return (
    <NativeButton
      disabled={!active}
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

export default Button;