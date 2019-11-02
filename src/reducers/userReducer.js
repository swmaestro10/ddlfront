import {
  SIGN_IN,
  SIGN_OUT,
  USER_INFO,
  CHECK_USER
} from "../actions/userFunction";

export default function(state = 0, action) {
  switch (action.type) {
    case CHECK_USER:
      return { token: action.payload };
    case SIGN_IN:
      return { token: action.payload };
    case SIGN_OUT:
      return { token: action.payload };
    case USER_INFO:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}
