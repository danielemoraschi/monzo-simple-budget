import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image
} from 'react-native';
import {
  Drawer,
  Avatar as NativeAvatar
} from 'react-native-material-ui';
import uiTheme from '../constants/Theme';


const image = <Image 
  style = {
    uiTheme.avatarImage.container
  }
  source = {
    uiTheme.avatarImage.source
  }
/>

/**
 * 
 * @param {*} param0 
 */
const Avatar = ({ size }) => {
  return (
    <NativeAvatar
      size={size || uiTheme.avatarContainer.container.width}
      style={uiTheme.avatarContainer}
      image={image}
    />
  )
}

Avatar.propTypes = {
  size: PropTypes.number,
}

export default Avatar;