import axios from "axios";

export const UPLOAD_FILE = "upload_file";

const ROOT_URL = "http://ddukddak.io/class";

export function uploadFile(value) {
  const request = axios
    .post(`${ROOT_URL}/sub/image`, value)
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: UPLOAD_FILE,
    payload: request
  };
}
