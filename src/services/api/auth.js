import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const result = await instance.post('/users/signup', data);
  setToken(result.data.token);
  return result.data;
};

export const login = async data => {
  const result = await instance.post('/users/login', data);
  setToken(result.data.token);

  return result.data;
};

export const logout = async data => {
  const result = await instance.post('/users/logout', data);
  setToken('');
  return result.data;
};

export const getCurrentUser = async token => {
  try {
    setToken(token);
    const result = await instance.get('/users/current');
    return result.data;
  } catch (error) {
    setToken('');
    throw error;
  }
};

export default instance;
