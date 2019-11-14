import { LOAD, UPLOAD_FILE } from "../actions/fileFunction";

export default function(state = 0, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return 0;
    case LOAD:
      return action.payload;
    default:
      return state;
  }
}
