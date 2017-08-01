'use strict';

import React, { Component, } from 'react';
import { View, Text, Image, } from 'react-native';
import { Drawer, Avatar, } from 'react-native-material-ui';
import STYLE from './styles';


export default class DrawerContent extends Component {

    render() {
        //const {navigate} = this.props.navigation;
        //console.log(this.props)
        // <Button
        //   onPress={() => navigate('Profile', {name: 'Brent'})}
        //   title="Go to Brent's profile"
        // />

        let footer = <Text>
            Footer
        </Text>;

        let avatar = <Avatar
            size={56}
            style={STYLE.Avatar}
            image={<Image
                style={STYLE.AvatarImage}
                source={STYLE.AvatarImageSource}
            />}
        />;

        return (
            <Drawer style={STYLE.DrawerPanel}>
                <Drawer.Header
                    style={STYLE.DrawerHeader}
                >
                    <Drawer.Header.Account
                        avatar={avatar}
                        footer={footer}
                    >
                    </Drawer.Header.Account>
                </Drawer.Header>
                <Drawer.Section
                    dense
                    title={"Menu"}
                    items={[
                        {
                            icon: "book",
                            value: "My trips",
                            onPress: () => {
                                this.props.navigator().resetTo({
                                    id: "TripContainer",
                                    passProps: {}
                                });
                            },
                        },{
                            icon: "close",
                            value: "Close the drawer",
                            onPress: this.props.closeDrawer
                        }
                    ]}
                >

                </Drawer.Section>
            </Drawer>
        )
    }
}
