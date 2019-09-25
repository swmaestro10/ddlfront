export const FETCH_CODE = 'fetch_code';
export const SUBMIT_CODE = 'submit_code';

export function fetchCode(code, workspace) {
    return {
        type: FETCH_CODE,
        payload: { code, workspace }
    }
}

export function submitCode(message) {
    return {
        type: SUBMIT_CODE,
        payload: message
    }
}