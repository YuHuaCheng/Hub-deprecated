import { FOCUSED_DECK_CARD_CHANGED } from './types';

export const deckFocusedChanged = (focusedItemIndex) => {
    return {
        type: FOCUSED_DECK_CARD_CHANGED,
        payload: focusedItemIndex
    }
};
