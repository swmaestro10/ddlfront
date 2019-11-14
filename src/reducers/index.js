import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import UserReducer from "./userReducer";
import ClassAllReducer from "./classAllReducer";
import ClassReducer from "./classReducer";
import CodeReducer from "./codeReducer";
import FileReducer from "./fileReducer";
import ResultReducer from "./resultReducer";
import LoadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
  classAll: ClassAllReducer,
  class: ClassReducer,
  code: CodeReducer,
  result: ResultReducer,
  file: FileReducer,
  load: LoadingReducer
});

export default rootReducer;
