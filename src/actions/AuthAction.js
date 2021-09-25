import axios from 'axios';

export const login = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/auth/login`;
    return axios.post(url, model).then(res => {
        return res.data;
    })
}