import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Chat from '../components/Chat';

import { THEME_COLOR } from '../index';

class ChatScreen extends Component {
    static navigationOptions = ({ }) => {
        return {
            title: 'WCS Party Tonight',
            tabBarVisible: false,
            headerTintColor: '#080808',
            headerStyle: {
                backgroundColor: '#FFFFFF',
                marginTop: Platform.OS === 'android' ? 24 : 0
            },
            headerTitleStyle: {
                fontSize: 14,
            },
        }
    };

    render(){
        const { user } = this.props.navigation.state.params; // passed from HubScreen
        return (
            <View style={styles.containerStyle}>
                <Chat
                    user={user}
                    style={{ flex: 1 }}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
};

export default ChatScreen;