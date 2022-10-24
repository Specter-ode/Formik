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
    console.log('data: ', data);
    try {
      this.setLoading(true);
      const result = await api.register(data);
      console.log('result: ', result);
      console.log('result.user: ', result.user);
      this.setUser(result.user);

      this.setToken(result.token);
      console.log('this.token : ', this.token);
      console.log('this.user: ', this.user);
      this.setIsLogin(true);
      this.setLoading(false);
    } catch (error) {
      console.log('error: ', error);
      toast.error(`Sorry, Register failed. Try again.`);
      this.setError(error);
      this.setLoading(false);
    }
    console.log('finish reg');
  };

  async login() {}
  async logout() {}
  async getCurrentUser() {}
}

export default new AuthStore();
