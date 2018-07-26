import * as axios from 'axios';
import AuthService from './AuthService';
/*
------------
NOTES
------------

/api/users - CRUD + json-server extensions
/api/devices - CRUD + json-server extensions, additional query param `search` for search deep
/api/offices - CRUD + json-server extensions
/api/places - CRUD + json-server extensions
/api/identify/{id} - only GET, accept params: id
*/

class Api {
  
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://185.238.72.22:5000',
      headers: {
        'Authorization': 'Bearer ' + AuthService.token //sprawdzić czy tak można! 
      }
    });
  }


  loginUser(login, password) {
    this.axiosInstance.post('/api/auth', {
      headers: {
        'ContentType': 'application/json'
      },
      data: {
        'login': login,
        'password': password
      }
    })
    .then( response => {
      return response.token;
    })
    .catch( err => {
      console.log(err);
      // REDIRECT IMPLEMENTATION 
    });
  }

  /**
   * Find logged in user using his/her token.
   * @param {string} token 
   * @returns {JSON} user data
   */
  getLoggedInUser(token) {
    axios.get('/api/users/current')
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });
  }

  /**
   * @returns All users 
   */
  getAllUsers() {
    this.axiosInstance.get('/api/users')
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export default new Api();
