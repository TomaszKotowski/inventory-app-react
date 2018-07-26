import { observable } from "mobx";
import Api from './Api';

class AuthService {

  @observable token; 

  constructor() {
    this.token = this.getToken() || '';
    this.tokenName = 'zoniToken';
  }

  login(login, password) {
    this.token = Api.loginUser(login, password) || '';
    if(this.token){
      this.setToken(this.token);
    }
  }

  loggedIn() {
    if(this.getToken()) {
      return false;
    }

    return true;
  }

  setToken(token) {
    localStorage.setItem(this.tokenName, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenName);
  }

  getProfile() {
    if(this.loggedIn()){
      Api.getLoggedInUser(this.token);
    } else {
      // Redirect to login screen 
    }
  }

  logout() {
    localStorage.removeItem(this.tokenName);
  }
}

export default AuthService;