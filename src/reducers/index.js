import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './userReducer';
import ClassAllReducer from './classAllReducer';
import ClassReducer from './classReducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: UserReducer,
    classAll: ClassAllReducer,
    class: ClassReducer
});

export default rootReducer;