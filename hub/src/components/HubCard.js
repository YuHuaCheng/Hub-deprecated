import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class HubCard extends Component {
    static defaultProps = {
        topic: "This is a cool hub",
        tags: "#general",
        isFocused: false
    };

    onCardPress = () => {
        const { topic } = this.props;
        console.log(topic);
    };

    render() {
        const { image, topic, tags, amount, isFocused } = this.props;

        return (
            <TouchableOpacity
                onPress={this.onCardPress}
                style={styles.wrapperStyle}
                activeOpacity={1.0}
            >
                <View style={styles.containerStyle}>
                    <View style={isFocused ? styles.focusedStyle : styles.blurStyle} />
                    <Image
                        style={styles.imageStyle}
                        source={image}
                        resizeMode="cover"
                    />
                    <Text style={styles.topicStyle}>{topic}</Text>
                    <Text style={styles.tagsStyle}>{tags.map(tag => `#${tag} `)}</Text>
                    <Text style={styles.amountStyle}>{`${amount} active Hubbers`}</Text>
                </View>
            </TouchableOpacity>
        )

    }
}

const IMAGE_WIDTH = 190;
const styles = {
    wrapperStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
    },
    containerStyle: {
        flex: 1,
        marginBottom: 10,
        padding: 0,
    },
    imageStyle: {
        width: IMAGE_WIDTH,
        height: 120
    },
    topicStyle: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold'
    },
    tagsStyle: {
        fontSize: 13,
        color: '#365899'
    },
    amountStyle: {
        fontSize: 14,
        color: '#FF5A5F'
    },
    focusedStyle: {
        marginBottom: 2,
        width: IMAGE_WIDTH,
        borderTopColor: '#FF5A5F',
        borderTopWidth: 4
    },
    blurStyle: {
        marginBottom: 2,
        width: IMAGE_WIDTH,
        borderTopColor: '#FFFFFF',
        borderTopWidth: 4
    }
};

export default HubCard;