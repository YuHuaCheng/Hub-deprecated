import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import firebase from "firebase";

import {
    MESSAGE_ROOT_NODE,
    messageFetch,
    messageSend
} from '../actions/message_actions';

const ROOM_ID = 'roomTest';

class Chat extends Component {
    messageRef = null;

    componentWillMount(){
        this.messageRef = firebase.database().ref(`${MESSAGE_ROOT_NODE}${ROOM_ID}`);
    }

    onSend = (messages = []) => {
        const { messageSend } = this.props;
        messageSend(ROOM_ID, messages);
    };

    renderUsername(position, username) {
        if(position === 'right'){ // don't show username if it's myself's message
            return null
        }
        return <Text style={styles.messageUsernameStyle}>{username}</Text>
    }

    renderBubble(props) {
        return (
            <View>
                {props.renderUsername(props.position, props.currentMessage.user.name)}
                <Bubble
                    {...props}
                    wrapperStyle={{
                        right: {
                            padding: 1,
                            backgroundColor: '#ff5e50'
                        },
                        left: {
                            padding: 1
                        }
                    }}
                />
            </View>
        )
    }

    render() {
        const { user, messages } = this.props;
        return (
            <GiftedChat
                messages={messages}
                onSend={this.onSend}
                user={{
                    _id: user,
                    name: user,
                    avatar: 'https://api.adorable.io/avatars/285/abott'
                }}
                renderUsername={this.renderUsername}
                renderBubble={this.renderBubble}
            />
        )
    }

    componentDidMount(){
        const { messageFetch } = this.props;
        messageFetch(ROOM_ID, this.messageRef);
    }

    componentWillUnmount(){
        // when navigating out the chat room, stop listening to new message from the server
        this.messageRef.off();
    }

}

const styles = {
    messageUsernameStyle: {
        fontSize: 12,
        color: '#b7b7b7',
        marginLeft: 10,
        marginBottom: 2,
        marginTop: 2
    }
};

const mapStateToProps = ({ message }) => {
    return { messages: message.messages };
};

export default connect(mapStateToProps, { messageFetch, messageSend })(Chat);