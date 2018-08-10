import { observable, computed, action } from 'mobx';
import { find } from 'lodash';
import UserService from '../services/UserService';
import UserModel from '../models/UserModel';

class UserStore {
  @observable currentUser = {};
  @observable usersList = [];

  /**
   * Set user data to current user store
   * @param {Object} data 
   */
  setUser(data = {}) {
    this.currentUser = data;
  }

  deleteUser() {
    this.currentUser = {};
  }

  async getAllUsers() {
    if (this.usersList.length < 2) {
      const userList = await UserService.getAllUsers();
      this.addUserList(userList);
    }

    return this.usersList;
  }

  @action
  async getUserById(id) {
    const user = find(this.usersList, item => item.id === id);

    if (!user) {
      const newUser = await UserService.getUserById(id);
      this.setToUsersList(newUser);
      return newUser;
    }

    return user;
  }

  @computed get getPictureAvatarLink() {
    return this.currentUser.avatar;
  }

  getPicturesAvatar(id) {
    const user = find(this.usersList, item => item.id === id)
    return user.avatar;
  }

  setToUsersList(data) {
    const user = find(this.usersList, item => item.id === data.id);
    if (!user) {
      this.usersList.push(data);
    }
  }

  deleteUsersList() {
    this.usersList = [];
  }

  addUserList(userList) {
    this.usersList = userList
  }
}

export default new UserStore();