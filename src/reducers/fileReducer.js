import { UPLOAD_FILE } from "../actions/fileFunction";

export default function(state = null, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.payload;
    default:
      return state;
  }
}
