import { IS_HUB_FORM_VISIBLE, HUB_CARD_PRESSED } from './types';

export const showHubForm = (isHubFormVisible) => {
    return {
        type: IS_HUB_FORM_VISIBLE,
        payload: isHubFormVisible
    }
};

export const passPressedHubCardIndex = (index) => {
    return {
        type: HUB_CARD_PRESSED,
        payload: index
    }
};
