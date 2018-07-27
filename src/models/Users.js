import { observable, action, computed } from "mobx";
import { remove } from 'lodash';

export default class Users {
      @observable id;
      @observable avatar;
      @observable firstName;
      @observable lastName;
      @observable email;
      @observable login;
      @observable officeId;
      @observable isAdmin;

      @observable devices = [];
      addDevice(deviceId) {
        devices.push(device)
      }
      removeDevice(deviceId) {
        //skasowac dany element z danym ID z tablicy
        remove(devices, item => item.id === deviceId);
      }
      
      @observable places = [];

      constructor({ id, avatar, firstName, lastName, email, login, officeId, isAdmin}) {
          this.id = id;
          this.avatar = avatar;
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
          this.login = login;
          this.officeId = officeId;
          this.isAdmin = isAdmin;
      }
}
