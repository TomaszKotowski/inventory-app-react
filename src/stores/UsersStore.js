import { observable, computed } from 'mobx';

class UserStore {
  @observable currentUser = {};
  @observable usersList = [];

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

  @computed get getPictureAvatarLink() {
    return this.currentUser.avatar;
  }

  setToUsersList(data){
    this.usersList.push(data);
  }

  deleteUsersList() {
    this.usersList = [];
  }
}

export default new UserStore();