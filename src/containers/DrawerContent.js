import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
} from 'react-native';

import DrawerLayout from '../components/DrawerLayout';
import Avatar from '../components/Avatar';


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

class DrawerContentComponent extends React.Component {
  render() {
    const { navigation, items, activeItemKey } = this.props;
    return (
      <DrawerLayout
        uiTheme={this.context.uiTheme}
        title={'Menu'}
        avatar={<Avatar />}
        footer={<Text>Footer</Text>}
        menuItems={getMenuItemsArray(
          navigation.navigate,
          items,
          activeItemKey
        )}
      />
    );
  }
}

DrawerContentComponent.contextTypes = {
  uiTheme: PropTypes.object.isRequired,
}

/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {}
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const DrawerContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerContentComponent);

export default DrawerContent;
