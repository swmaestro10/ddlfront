import { FETCH_CODE } from '../actions/codeFunction';

export default function(state={ code: '', workspace: ''}, action) {
    switch(action.type){
        case FETCH_CODE:
            return action.payload;
        default:
            return state;
    }
}