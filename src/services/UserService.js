import ApiClient from './AxiosClientService';

class User {

  /**
   * @returns All users 
   */
  getAllUsers() {
    ApiClient.getInstance().get('/api/users')
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
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

export default new User();
