import client from './AxiosClientService';

class User {

  /**
   * @returns All users 
   */
  getAllUsers() {
    client.get('/api/users')
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUserById(userId) {
    client.get('/api/users/' + userId)
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
