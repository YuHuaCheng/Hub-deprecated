import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class HubCard extends Component {
    static defaultProps = {
        image: require('../../images/shiba_dolphin.jpg'),
        topic: "This is a cool hub",
        tags: "#food",
        amount: 34
    };

    render() {
        const { image, topic, tags, amount } = this.props;

        return (
            <View style={styles.wrapperStyle}>
                <View style={styles.containerStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={image}
                        resizeMode="cover"
                    />
                    <Text style={styles.topicStyle}>{topic}</Text>
                    <Text style={styles.tagsStyle}>{tags}</Text>
                    <Text style={styles.amountStyle}>{`${amount} active Hubbers`}</Text>
                </View>
            </View>
        )

    }
}

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
        width: 180,
        height: 180,
        marginBottom: 10,
        padding: 0,
    },
    imageStyle: {
        width: 180,
        height: 120
    },
    topicStyle: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold'
    },
    tagsStyle: {
        fontSize: 13,
        color: '#7b7b7b'
    },
    amountStyle: {
        fontSize: 14,
        color: '#FF5A5F'
    }
};

export default HubCard;