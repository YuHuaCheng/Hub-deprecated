import firebase from 'firebase';

import { SEND_MESSAGE, FETCH_MESSAGE } from "./types";

const MESSAGE_ROOT_NODE = '/messages/';

export const messageSend = (roomId, messages) => {
    return (dispatch) => {
        const messageRef = firebase.database().ref(`${MESSAGE_ROOT_NODE}${roomId}`);
        const sendPromises = [];
        messages.map( message => {
            sendPromises.push( messageRef.push(message) )
        });
        Promise.all(sendPromises)
            .then(dispatch({ type: SEND_MESSAGE }))
    }
};

export const messageFetch = (roomId) => {
    const MAX_MESSAGE_LOOKBACK = 30;

    return (dispatch) => {
        const messageRef = firebase.database().ref(`${MESSAGE_ROOT_NODE}${roomId}`);
        messageRef
            .limitToLast(MAX_MESSAGE_LOOKBACK)
            .on('value', snapshot => {
                const res = snapshot.val();
                const messages = res === null ? [] : Object.keys(res).map(key => res[key]);

                dispatch({ type: FETCH_MESSAGE, payload: messages.reverse() })
            })
    }
};