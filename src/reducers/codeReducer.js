import { FETCH_CODE } from '../actions/codeFunction';

export default function(state={ code: '', workspace: ''}, action) {
    switch(action.type){
        case FETCH_CODE:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}