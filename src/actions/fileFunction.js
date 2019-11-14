import axios from "axios";

export const UPLOAD_FILE = "upload_file";
export const LOAD = "load";

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

export function testFile(value) {
  const request = axios
    .post("http://54.180.21.170:8080/api/upload", value)
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

export function loading() {
  return {
    type: LOAD,
    payload: 1
  };
}
export function loading2() {
  return {
    type: LOAD,
    payload: 0
  };
}
