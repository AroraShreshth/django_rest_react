import { GET_LEADS } from '../actions/types.js';

const intialState = {
    something: 'text',
    leads: []
}

export default function (state = intialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload,
            };
        default:
            return state;
    }
}