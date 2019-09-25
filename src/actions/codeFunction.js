import socketIOClient from 'socket.io-client';

export const FETCH_CODE = 'fetch_code';
export const SUBMIT_CODE = 'submit_code';

export function fetchCode(code, workspace) {
    return {
        type: FETCH_CODE,
        payload: { code, workspace }
    }
}

export function submitCode(code, token, subclass) {
    const socket = socketIOClient("52.78.238.217:8800");
    socket.emit('submit',{ code, token, subclass});
    socket.on('result', (message) => {
        console.log(message);
    });
    return {
        type: SUBMIT_CODE,
        payload: 1
    }
}