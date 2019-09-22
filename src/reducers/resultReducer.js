import { SUBMIT_CODE } from '../actions/codeFunction';

export default function(state=[], action) {
    switch(action.type) {
        case SUBMIT_CODE:
            return action.payload;
        default:
            return state;
    }
}