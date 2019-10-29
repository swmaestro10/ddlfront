import axios from "axios";

export const UPLOAD_FILE = "upload_file";

const ROOT_URL = "http://54.180.21.170:8080";

export function uploadFile(value) {
  const request = axios
    .post(`${ROOT_URL}/api/upload`, value)
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
