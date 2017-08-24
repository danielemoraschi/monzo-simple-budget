import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { DrawerItems } from 'react-navigation';

import DrawerLayout from '../components/DrawerLayout';
import Avatar from '../components/Avatar';


const defaultTitle = 'Menu';

class DrawerContentComponent extends React.Component {
  render() {
    return (
      <DrawerLayout
        uiTheme={this.context.uiTheme}
        title={this.props.title}
        avatar={<Avatar />}
        footer={<Text>Footer</Text>}
        menuItems={<DrawerItems {...this.props} />}
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
  let title = defaultTitle;
  if (state.auth.accounts && state.auth.accounts.length) {
    title = state.auth.accounts[0].description;
  }
  return {
    title: title
  }
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
