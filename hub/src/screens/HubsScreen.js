import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class HubsScreen extends Component {
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