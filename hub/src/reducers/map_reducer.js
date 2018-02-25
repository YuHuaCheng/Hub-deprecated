import {
    FOCUSED_DECK_CARD_CHANGED
} from '../actions/types';
import { HUBS_ON_MAP_DATA } from "../index";

const INITIAL_STATE = {
    hubsOnMap: HUBS_ON_MAP_DATA,
    focusedDeckItemIndex: 0,
    mapRef: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FOCUSED_DECK_CARD_CHANGED:
            return { ...state, focusedDeckItemIndex: action.payload };
        default:
            return state
    }
}
