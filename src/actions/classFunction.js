import axios from 'axios';

export const GET_ALL_CLASS = 'get_all_class';
export const GET_CLASS = 'get_class';

const ROOT_URL = 'http://ddukddak.io/class';

export function GetClassAll(token, auth) {
    const request = axios
        .post(`${ROOT_URL}/${auth}`,{ token })
        .then((response) => {
            return response;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: GET_ALL_CLASS,
        payload: request
    };
}

export function GetClass(token, index) {
    const request = axios
        .post(`${ROOT_URL}/enter`,{ token, class: index })
        .then((response) => {
            if(response.data[1].length === 0){
                return 0;
            }
            return response.data[1][0];
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: GET_CLASS,
        payload: request
    };
}