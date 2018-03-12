import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import { ifIphoneX } from 'react-native-iphone-x-helper'

class HubForm extends Component {

    render() {
        const {item, visible, onCancel} = this.props;

        if (item !== undefined) {
            const { topic, image, description, tags, amount } = item;

            return (
                <Modal
                    isVisible={visible}
                    style={styles.modalStyle}
                    backdropOpacity={0.3}
                >
                    <View style={styles.containerStyle}>

                        <View style={styles.imageContainerStyle}>
                            <Image
                                style={styles.imageStyle}
                                source={image}
                                resizeMode="cover"
                            />
                        </View>

                        <View style={styles.contentStyle}>
                            <Text style={styles.topicStyle}>{topic}</Text>
                            <Text style={styles.descriptionStyle}>{description}</Text>
                            <Text style={styles.tagsStyle}>{tags.map(tag => `#${tag} `)}</Text>
                        </View>

                        <View style={styles.buttonContainerStyle}>
                            <View style={styles.amountContainerStyle}>
                                <Text style={styles.amountStyle}>{`${amount} `}</Text>
                                <Text style={styles.amountTextStyle}>{'Active Hubbers'}</Text>
                            </View>
                            <Button
                                buttonStyle={styles.buttonStyle}
                                title='Enter'
                                onPress={() => {}}
                            />
                            <Button
                                buttonStyle={styles.buttonStyle}
                                title='Cancel'
                                onPress={onCancel}
                            />
                        </View>

                    </View>
                </Modal>
            )
        }

        return <View />
    }
}

const styles = {
    modalStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,

        ...ifIphoneX({
            marginTop: 140,
            marginBottom: 100,
        }, {
            marginTop: 100,
            marginBottom: 60,
        })
    },
    containerStyle: {
        flex: 1,
    },
    imageContainerStyle: {
        flex: 1,
        flexDirection: 'row',

        // the below three is to make Image also follow the borderRadius styling
        overflow: 'hidden',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 200,
    },
    contentStyle: {
        flex: 1,
        marginLeft: 15,
        marginRight: 10
    },
    topicStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        ...ifIphoneX({
            marginTop: -20
        }, {
            marginTop: 15
        })
    },
    descriptionStyle: {
        fontSize: 15,
        marginTop: 12,
        lineHeight: 22,
        fontStyle: 'italic'
    },
    tagsStyle: {
        fontSize: 15,
        marginTop: 10,
        color: '#365899'
    },
    amountContainerStyle: {
        flexDirection: 'column',
        marginRight: 30,
        marginLeft: 10,
        ...ifIphoneX({
            marginLeft: 10,
            marginRight: 20,
        }, null)
    },
    amountStyle: {
        fontSize: 20,
        color: '#FF5A5F',
        fontWeight: 'bold',
    },
    amountTextStyle: {
        fontSize: 14,
        color: 'black',
        fontStyle: 'italic'
    },
    buttonContainerStyle: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#FF5A5F',
        borderRadius: 6,
        margin: -10,
        right: 10,
    }
};

export default HubForm;