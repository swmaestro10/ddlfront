import { SIGN_IN, SIGN_OUT, USER_INFO } from '../actions/userFunction';

export default function(state=0, action) {
    switch(action.type) {
        case SIGN_IN:
            return { token : action.payload };
        case SIGN_OUT:
            return { token : action.payload };
        case USER_INFO:
            return Object.assign(state,action.payload);
        default:
            return state;
    }
}