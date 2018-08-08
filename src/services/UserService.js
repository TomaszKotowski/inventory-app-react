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
    return ApiClient.getInstance().get('/api/users/' + userId)
      .then(result => new UserModel(result.data))
      .catch(err => {
        console.log(err);
      })
  }
}

export default new UserService();
