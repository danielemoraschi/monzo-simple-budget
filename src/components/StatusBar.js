import React from 'react';
import PropTypes from 'prop-types';
import { 
  StatusBar as NativeStatusBar, 
  View,
  Platform,
  Text
} from 'react-native';


const ANDROID_TOPBAR_HEIGHT = 24;

/**
 * 
 * @param {*} param0 
 */
const StatusBar = ({ 
    translucent = true, 
    backgroundColor = 'rgba(0, 0, 0, 0.20)', 
    animated = true,
}) => {
  return (
    <View>
      <NativeStatusBar
        translucent={translucent}
        animated={animated}
        backgroundColor={backgroundColor}
      />
      <View
        style={{
          height: ANDROID_TOPBAR_HEIGHT,
        }}
      />
    </View>
  );
}

StatusBar.propTypes = {
  translucent: PropTypes.bool,
  backgroundColor: PropTypes.string,
  animated: PropTypes.bool,
}

export default StatusBar;