import * as Types from '../constants/actionsType';
import {MESSAGE_WELLCOM} from '../constants/messages';
var initialState = MESSAGE_WELLCOM;
const appReducers = (state = initialState,action) => {
    switch(action.type){
        case Types.CHANGE_MESSAGE :
        return action.message;
        default : return state;
    }
};

export default appReducers;