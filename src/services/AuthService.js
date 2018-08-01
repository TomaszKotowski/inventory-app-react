import { observable } from "mobx";
import { get } from 'lodash';
import client from './AxiosClientService';
import AuthData from './AuthorizationData';

import UsersStore from "../stores/UsersStore";
import UserModel from '../models/UserModel';


class AuthService {

  tokenName = 'zoniToken';

  constructor() {
    this.getProfile();
  }

  login(login, password) {
    const data = JSON.stringify({
      login: login,
      password: password
    });

    return client.post('/api/auth', 
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
      const status = get(err, 'response.status', null);

      if (status === 401) {
        throw new Error('Invalid credentials');
      }
    })
  }

  isLoggedIn() {
    const token = AuthData.getToken();

    if(token === 'null' || token == null) {
      return false;
    }
    
    AuthData.setToken(token);
    return true;
  }

  getProfile() {
    if (this.isLoggedIn()) {
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