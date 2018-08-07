import ApiClient from './AxiosClientService';
import UserModel from '../models/UserModel';

class UserService {

  /**
   * @returns All users 
   */
  getAllUsers() {
    return ApiClient.getInstance().get('/api/users')
      .then(result => result.data.map(element => new UserModel(element)))
      .catch(err => console.log(err));
  }

  /**
   * Find user by his/her ID
   * @param {string} userId 
   */
  getUserById(userId) {
    ApiClient.getInstance().get('/api/users/' + userId)
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default new UserService();
