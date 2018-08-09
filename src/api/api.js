import axios from 'axios';

let base = '/priams/api';

export const login = params => {
  return axios.post(`${base}/user/login`, params).then(res => res.data);
};

export const getUser = params => {
  return axios.get(`${base}/user`, {params: params}).then(res => res.data);
};

