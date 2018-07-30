import { observable } from "mobx";
import client from './AxiosClientService';
import { getToken, setToken } from './AuthorizationData';

import UsersStore from "../stores/UsersStore";
import UserModel from '../models/UserModel';


class AuthService {

  constructor() {
    this.tokenName = 'zoniToken';
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
      }
    })
    .catch(err => {
      // REDIRECT IMPLEMENTATION 
    });
  }

  loggedIn() {
    const token = getToken();
    
    if(!token) {
      return false;
    }
    
    setToken(token);
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
    setToken('');
    UsersStore.deleteUser();
    localStorage.removeItem(this.tokenName);
  }
}

export default AuthService;