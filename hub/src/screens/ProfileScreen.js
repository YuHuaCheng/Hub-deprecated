import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class ProfileScreen extends Component {
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