import React from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements'

class HubMarker extends React.Component {
    static defaultProps = {
        fontSize: 15,
    };

    render() {
        const { fontSize, amount } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.bubble}>
                    <Icon
                        name="user"
                        type="font-awesome"
                        size={fontSize - 3}
                        color={'#FFFFFF'}
                    />
                    <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#FF5A5F',
        padding: 2.5,
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 5,
    },
    amount: {
        paddingLeft: 2,
        color: '#FFFFFF'
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#FF5A5F',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#D23F44',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});

export default HubMarker;