import { GET_CLASS } from '../actions/classFunction';

export default function(state=null, action) {
    switch(action.type){
        case GET_CLASS:
            return action.payload;
        default:
            return state;
    }
}