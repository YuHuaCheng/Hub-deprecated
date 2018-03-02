import firebase from 'firebase';

import { SEND_MESSAGE, FETCH_MESSAGE } from "./types";

export const MESSAGE_ROOT_NODE = '/messages/';

export const messageSend = (roomId, messages) => {
    return (dispatch) => {
        const messageRef = firebase.database().ref(`${MESSAGE_ROOT_NODE}${roomId}`);
        const sendPromises = [];
        messages.map( message => {
            message.createdAt = firebase.database.ServerValue.TIMESTAMP;
            sendPromises.push( messageRef.push(message) )
        });
        Promise.all(sendPromises)
            .then(dispatch({ type: SEND_MESSAGE }))
    }
};

export const messageFetch = (roomId, messageRef) => {
    const MAX_MESSAGE_LOOKBACK = 10;
    return (dispatch) => {
        messageRef
            .limitToLast(MAX_MESSAGE_LOOKBACK)
            .on('child_added', snapshot => {
                const res = snapshot.val();
                const messages = res === null ? [] : [res];

                dispatch({ type: FETCH_MESSAGE, payload: messages })
            })
    }
};