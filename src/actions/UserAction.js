import axios from 'axios';

export const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    const header = {
        headers: { Authorization: "Bearer " + token }
    };
    return header;
}

export const getList = (page, limit) => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/user/list?p=${page}&l=${limit}`;
    return axios.get(url, getAuthHeader()).then(res => {
        return res.data;
    })
}

export const getDetail = (userId) => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/user/detail?uid=${userId}`;
    return axios.get(url, getAuthHeader()).then(res => {
        return res.data;
    })
}

export const updateDetail = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/user/update-detail`;
    return axios.put(url, model, getAuthHeader()).then(res => {
        return res.data;
    })
}