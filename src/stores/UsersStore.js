import { observable, computed } from 'mobx';
import UserService from '../services/UserService';

class UserStore {
  @observable currentUser = {};
  @observable usersList = [];

  constructor(){
    UserService.getAllUsers().then((list)=>{
      this.addUserList(list);
    })
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

  @computed get getPictureAvatarLink() {
    return this.currentUser.avatar;
  }

  setToUsersList(data){
    this.usersList.push(data);
  }

  deleteUsersList() {
    this.usersList = [];
  }

  addUserList(userList){
    this.userList = userList
   }
}

export default new UserStore();