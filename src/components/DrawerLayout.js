import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer as NativeDrawer,
} from 'react-native-material-ui';
import { View, Text } from 'react-native';


/**
 * 
 * @param {*} navigate 
 * @param {*} items 
 * @param {*} activeItem 
 */
const getMenuItemsArray = (navigate, items, activeItem) => {
  let menuItems = [];
  items.forEach((element) => {
    menuItems.push({
      icon: null,
      value: element.key,
      label: element.key,
      onPress: () => navigate(element.routeName, { name: element.key }),
      active: activeItem === element.key,
    });
  }, this);
  return menuItems;
}

/**
 * 
 * @param {*} param0 
 */
const DrawerLayout = ({
  uiTheme,
  title,
  avatar,
  footer,
  menuItems
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
      {(() => {
        if (React.isValidElement(menuItems)) {
          return <View>
            <NativeDrawer.Section
              style={uiTheme.DrawerSection}
              dense={true}
              title={title}
              items={[]}
            />
            {menuItems}
          </View>;
          //return menuItems;
        } else {
          return <NativeDrawer.Section
            style={uiTheme.DrawerSection}
            dense={true}
            title={title}
            items={getMenuItemsArray(
              menuItems.navigate,
              menuItems.items,
              menuItems.activeItem
            )}
          />
        }
      })()}
    </NativeDrawer>
  )
}

DrawerLayout.propTypes = {
  uiTheme: PropTypes.shape({
    Drawer: PropTypes.object,
    DrawerHeader: PropTypes.object,
    DrawerSection: PropTypes.object,
  }),
  title: PropTypes.string,
  avatar: PropTypes.element,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  menuItems: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired,
};

DrawerLayout.defaultState = {
  uiTheme: {
    Drawer: {},
    DrawerHeader: {},
    DrawerSection: {},
  },
  title: 'Menu',
  avatar: null,
  footer: null,
};

export default DrawerLayout;
