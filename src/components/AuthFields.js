import React from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text,
} from 'react-native';
import TextInputField from './TextInputField';


const AuthFields = ({ 
  user_id, 
  account_id, 
  access_token, 
  onChangeText 
}) => {
  return (
    <View>
      <Text>User ID</Text>
      <TextInputField
        value={user_id}
        onChangeText={(text) => onChangeText('user_id', text)}
      />
      <Text>Account ID</Text>
      <TextInputField
        value={account_id}
        onChangeText={(text) => onChangeText('account_id', text)}
      />
      <Text>Access token</Text>
      <TextInputField
        value={access_token}
        onChangeText={(access_token) => onChangeText('access_token', text)}
      />
    </View>
  )
}

AuthFields.propTypes = {
  user_id: PropTypes.string,
  account_id: PropTypes.string,
  access_token: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
}

export default AuthFields;