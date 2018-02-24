import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { NAVIGATION_ICON_SIZE } from '../'

class HubsScreen extends Component {
    static navigationOptions = () => {
        return {
            title: 'Hubs',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon
                        name='message-circle'
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
                <Text>HubsScreen</Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default HubsScreen;