import React, { Component } from 'react';
import {
    View, TextInput
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'

import { messageFetch, messageSend } from '../actions/message_actions';

class Chat extends Component {
    ROOM_ID = 'roomTest';

    onSend = (messages = []) => {
        const { messageSend } = this.props;
        messageSend(this.ROOM_ID, messages);
    };

    render() {
        console.log('rendered');
        const { messages } = this.props;
        return (
            <GiftedChat
                messages={messages}
                onSend={this.onSend}
                user={{
                    _id: 1,
                    name: 'Yu Hua'
                }}
            />
        )
    }

    componentDidMount(){
        console.log('did mount')
        const { messageFetch } = this.props;
        messageFetch(this.ROOM_ID);
    }

    componentWillUnmount(){
        console.log('unmount!')
    }
}

const mapStateToProps = ({ message }) => {
    return { messages: message.messages };
};

export default connect(mapStateToProps, { messageFetch, messageSend })(Chat);