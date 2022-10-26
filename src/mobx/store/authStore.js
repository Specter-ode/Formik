import * as api from '../../services/api/auth';
import { toast } from 'react-toastify';
import { makeAutoObservable } from 'mobx';

class AuthStore {
  user = {};
  token = '';
  isLogin = false;
  loading = false;
  error = null;
  constructor() {
    makeAutoObservable(
      this
      //   { deep: true }
    );
  }
  setUser = data => {
    this.user = data;
  };
  setToken = token => {
    this.token = token;
  };
  setError = error => {
    this.error = error;
  };
  setIsLogin = bool => {
    this.isLogin = bool;
  };
  setLoading = bool => {
    this.loading = bool;
  };
  register = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.login(data);
      this.setUser(result.user);
      this.setToken(result.token);
      this.setIsLogin(true);
    } catch (error) {
      toast.error(`Sorry, Register failed. Try again.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  login = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.login(data);
      // localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', JSON.stringify(result.token));
      this.setUser(result.user);
      this.setToken(result.token);
      this.setIsLogin(true);
    } catch (error) {
      toast.error(`Sorry, login failed. Check email and password. Try again.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
  logout = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.logout(data);
      this.setUser({});
      this.setToken('');
      this.setIsLogin(false);
    } catch (error) {
      toast.error(`Sorry, logout failed. Try again.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
  getCurrentUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      console.log('token getCurrentUser: ', token);
      this.setError(null);
      this.setLoading(true);
      const result = await api.getCurrentUser(token);
      this.setUser(result);
      this.setToken(token);
      this.setIsLogin(true);
      toast.info('Hello, you are already signed in');
    } catch (error) {
      toast.error(
        'Sorry, request failed. May be you have problems with network or token timed out '
      );
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
}

export default new AuthStore();
