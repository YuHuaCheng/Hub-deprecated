import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    Platform
} from 'react-native';

import {
    // Button,
    Icon,
    FormLabel,
    FormInput
} from 'react-native-elements';

import { NAVIGATION_ICON_SIZE } from '../'
import {THEME_COLOR} from "../index";

class HubsScreen extends Component {
    state = {
        user: ''
    };

    static navigationOptions = ({ }) => {
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
            },
            headerTintColor: '#080808',
            headerStyle: {
                backgroundColor: '#FFFFFF',
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    };

    render(){
        const { navigation } = this.props;

        return (
            <View>
                <FormLabel>User Name</FormLabel>
                <FormInput
                    value={this.state.user}
                    onChangeText={user => this.setState({ user })}
                />
                <Button
                    title='Next'
                    onPress={() => { navigation.navigate('chat', { user: this.state.user })}}
                />
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