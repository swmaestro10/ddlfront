import { SUBMIT_CODE } from '../actions/codeFunction';

export default function(state=[], action) {
    switch(action.type) {
        case SUBMIT_CODE:
            console.log("3");
            return [action.payload, ...state];
        default:
            return state;
    }
}