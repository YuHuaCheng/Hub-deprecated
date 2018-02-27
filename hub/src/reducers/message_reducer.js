import { FETCH_MESSAGE, SEND_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
    messages: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MESSAGE:
            console.log('message reducer fetch');
            return { ...state, messages: [ ...action.payload ] };
        case SEND_MESSAGE:
            return state;
        default:
            return state;
    }
}