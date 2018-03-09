import { combineReducers } from 'redux';

import map from './map_reducer';
import message from './message_reducer';

export default combineReducers({
    map, message
});
