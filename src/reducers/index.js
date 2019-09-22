import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './userReducer';
import ClassAllReducer from './classAllReducer';
import ClassReducer from './classReducer';
import CodeReducer from './codeReducer';
import ResultReducer from './resultReducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: UserReducer,
    classAll: ClassAllReducer,
    class: ClassReducer,
    code: CodeReducer,
    result: ResultReducer
});

export default rootReducer;