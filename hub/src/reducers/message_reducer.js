import _ from 'lodash'
import { FETCH_MESSAGE, SEND_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
    messages: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MESSAGE:
            return {
                ...state,
                messages: _.uniqBy([ ...action.payload, ...state.messages], '_id')
            };
        case SEND_MESSAGE:
            return state;
        default:
            return state;
    }
}