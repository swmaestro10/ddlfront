import axios from "axios";

export const SIGN_IN = "sign_in";
export const SIGN_UP = "sign_up";
export const SIGN_OUT = "sign_out";
export const USER_INFO = "user_info";
export const CHECK_USER = "check_user";

const ROOT_URL = "http://ddukddak.io/user";

export function checkUser(token) {
  return {
    type: CHECK_USER,
    payload: token
  };
}

export function signIn(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/signin`, values)
    .then(response => {
      if (response.data.login) {
        callback("/");
        return response.data.token;
      } else {
        alert("로그인 정보가 잘못되었습니다.");
        callback("/signin");
        return 0;
      }
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: SIGN_IN,
    payload: request
  };
}

export function signUp(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/signup`, values)
    .then(() => {
      callback("/signin");
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: SIGN_UP,
    payload: request
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
    payload: 0
  };
}

export function userInfo(token) {
  const request = axios.post(`${ROOT_URL}/info`, { token }).then(response => {
    return response.data[1];
  });
  return {
    type: USER_INFO,
    payload: request
  };
}
