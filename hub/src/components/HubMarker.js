import React from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements'

import { THEME_COLOR } from '../';

class HubMarker extends React.Component {
    static defaultProps = {
        fontSize: 15,
        markerColor: THEME_COLOR
    };

    render() {
        const { fontSize, amount, markerColor } = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.bubble, { backgroundColor: markerColor }]}>
                    <Icon
                        name="user"
                        type="font-awesome"
                        size={fontSize - 3}
                        color={'#FFFFFF'}
                    />
                    <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={[styles.arrow, { borderTopColor: markerColor }]} />
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
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});

export default HubMarker;