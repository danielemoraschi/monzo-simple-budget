import React from 'react';
import PropTypes from 'prop-types';
import { 
  TextInput, 
  Text,
} from 'react-native';

/**
 * 
 * @param {*} param0 
 */
const TextInputField = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={value}
      onChangeText={(value) => onChangeText(value)}
    />
  )
}

TextInputField.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
}

export default TextInputField;