import { observable } from 'mobx';

class UserStore {
  @observable currentUser;

  constructor() {
    this.currentUser = {};
  }

  /**
   * Set user data to current user store
   * @param {Object} data 
   */
  setUser(data) {
    this.currentUser = data;
  }

  deleteUser() {
    this.currentUser = {};
  }

  getPictureaAvatar() {
    return this.currentUser.avatar;
  }
}

export default new UserStore();