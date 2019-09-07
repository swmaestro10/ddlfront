import { GET_ALL_CLASS } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GET_ALL_CLASS:
            return action.payload.data;
        default:
            return state;
    }
}