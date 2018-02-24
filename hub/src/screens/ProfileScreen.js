import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { NAVIGATION_ICON_SIZE } from '../'

class ProfileScreen extends Component {
    static navigationOptions = () => {
        return {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon
                        name='user'
                        type='feather'
                        size={NAVIGATION_ICON_SIZE}
                        color={tintColor}
                    />
                )
            }
        }
    };

    render(){
        return (
            <View style={styles.containerStyle}>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default ProfileScreen;