import { observable } from 'mobx';

class UserStore {
  @observable currentUser;
}

export default new UserStore();