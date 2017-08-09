import React, { PropTypes } from 'react';
import {
  Drawer as NativeDrawer,
} from 'react-native-material-ui';


/**
 * 
 * @param {*} param0 
 */
const DrawerLayout = ({
  uiTheme,
  title,
  avatar,
  footer,
  menuItems,
  dense,
}) => {
  return (
    <NativeDrawer
      style={uiTheme.Drawer}
    >
      <NativeDrawer.Header
        style={uiTheme.DrawerHeader}
      >
        <NativeDrawer.Header.Account 
          avatar={avatar} 
          footer={footer}
        >
        </NativeDrawer.Header.Account>
      </NativeDrawer.Header>
      <NativeDrawer.Section
        dense={dense}
        title={title}
        items={menuItems}
      >
      </NativeDrawer.Section>
    </NativeDrawer>
  )
}

DrawerLayout.propTypes = {
  uiTheme: PropTypes.object,
  title: PropTypes.string,
  avatar: PropTypes.element,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  menuItems: PropTypes.array,
  dense: PropTypes.bool,
};

DrawerLayout.defaultState = {
  uiTheme: {
    Drawer: {},
    DrawerHeader: {},
  },
  title: 'Menu',
  avatar: null,
  footer: null,
  menuItems: [],
  dense: true,
};

export default DrawerLayout;
