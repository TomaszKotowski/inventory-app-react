import { observable } from "mobx";
import client from './AxiosClientService';
import { getToken, setToken } from './AuthorizationData';

import userStore from '../stores/User';
import User from '../models/Employee';

class AuthService {

  constructor() {
    this.tokenName = 'zoniToken';
    this.profile = {};
  }

  login(login, password) {
    client.post('/api/auth', {
      headers: {
        'ContentType': 'application/json'
      },
      data: {
        'login': login,
        'password': password
      }
    })
    .then(response => {
      if (response.token) {
        setToken(response.token);
        this.setTokenInLocalStorage(response.token);
      }
    })
    .catch(err => {
      // REDIRECT IMPLEMENTATION 
    });
  }

  loggedIn() {
    if(!this.getTokenFromLocalStorage()) {
      return false;
    }

    return true;
  }

  setTokenInLocalStorage(token) {
    localStorage.setItem(this.tokenName, token);
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem(this.tokenName);
  }

  getProfile() {
    if (this.loggedIn()) {
      axios.get('/api/users/current')
      .then(result => {
        const currentUser = new User(result);
        userStore.currentUser = currentUser;
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      // Redirect to login screen 
    }
  }

  logout() {
    setToken('');
    this.profile = {};
    localStorage.removeItem(this.tokenName);
  }
}

export default AuthService;