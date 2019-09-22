import axios from 'axios';
import socketIOClient from 'socket.io-client';

export const FETCH_CODE = 'fetch_code';
export const SUBMIT_CODE = 'submit_code';

const ROOT_URL = 'http://ddukddak.io/class';

export function fetchCode(code, workspace) {
    return {
        type: FETCH_CODE,
        payload: { code, workspace }
    }
}

export function submitCode(code, token, subclass) {
    // const request = axios
    //     .post(`${ROOT_URL}/sub/submit`, { token, subclass, code })
    //     .then((response) => {
    //         console.log(response);
    //         return response;
    //     })
    //     .catch((response) => {
    //         console.log(response);
    //     });
    if(!token){
        const socket = socketIOClient("52.78.238.217:8800");
        socket.emit('submit',{"name":"hello"});
    }
    return {
        type: SUBMIT_CODE,
        payload: 1
    }
}