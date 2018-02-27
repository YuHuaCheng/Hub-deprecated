import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Chat from '../components/Chat';
import { NAVIGATION_ICON_SIZE } from "../index";

class ChatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Title of Chat room',
            tabBarVisible: false
        }
    };

    render(){
        return (
            <View style={styles.containerStyle}>
                <Chat
                    style={{ flex: 1 }}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
    }
};

export default ChatScreen;