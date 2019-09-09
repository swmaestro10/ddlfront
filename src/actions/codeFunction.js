export const FETCH_CODE = 'fetch_code';

export function fetchCode(code, workspace) {
    return {
        type: FETCH_CODE,
        payload: [code, workspace]
    }
}
