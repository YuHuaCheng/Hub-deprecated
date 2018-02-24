import { HUBS_ON_MAP_DATA } from '../';

const INITIAL_STATE = { hubsOnMap: HUBS_ON_MAP_DATA };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state.hubsOnMap
    }
}
