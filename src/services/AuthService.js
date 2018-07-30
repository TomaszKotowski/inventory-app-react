import { observable } from "mobx";
import client from './AxiosClientService';
import AuthData from './AuthorizationData';

import UsersStore from "../stores/UsersStore";
import UserModel from '../models/UserModel';


class AuthService {

  constructor() {
    this.tokenName = 'zoniToken';
  }

  login(login, password) {
    const data = JSON.stringify({
      login: login,
      password: password
    });

    client.post('/api/auth', 
    data, 
    {
      headers: {
        'ContentType': 'application/json'
      },
    })
    .then(response => {
      console.log(response);
      if (response.data.token) {
        AuthData.setToken(response.data.token);
      }
    })
    .catch(err => {
      // REDIRECT IMPLEMENTATION 
    });
  }

  loggedIn() {
    const token = AuthData.getToken();
    
    if(!token) {
      return false;
    }
    
    AuthData.setToken(token);
    return true;
  }

  getProfile() {
    if (this.loggedIn()) {
      client.get('/api/users/current')
      .then(result => {
        const currentUser = new UserModel(result.data);
        UsersStore.setUser(currentUser);
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      // Redirect to login screen 
    }
  }

  logout() {
    AuthData.setToken(null);
    UsersStore.deleteUser();
    localStorage.removeItem(this.tokenName);
  }
}

export default new AuthService();