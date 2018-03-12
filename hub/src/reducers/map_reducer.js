import {
    FOCUSED_DECK_CARD_CHANGED,
    IS_HUB_FORM_VISIBLE,
    HUB_CARD_PRESSED
} from '../actions/types';

import { HUBS_ON_MAP_DATA } from "../index";

const INITIAL_STATE = {
    hubsOnMap: HUBS_ON_MAP_DATA,
    focusedDeckItemIndex: 0,
    isHubFormVisible: false,
    pressedDeckItemIndex: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FOCUSED_DECK_CARD_CHANGED:
            return { ...state, focusedDeckItemIndex: action.payload };
        case IS_HUB_FORM_VISIBLE:
            return { ...state, isHubFormVisible: action.payload };
        case HUB_CARD_PRESSED:
            return { ...state, pressedDeckItemIndex: action.payload };
        default:
            return state
    }
}
