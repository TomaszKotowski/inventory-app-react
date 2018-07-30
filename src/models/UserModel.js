import { observable, action, computed } from "mobx";
import { remove } from 'lodash';

export default class UserModel {
      @observable id;
      @observable avatar;
      @observable firstName;
      @observable lastName;
      @observable email;
      @observable login;
      @observable officeId;
      @observable isAdmin;

      @observable devices = [];      
      @observable places = [];

      constructor(data) {
          this.id = data.id;
          this.avatar = data.avatar;
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.email = data.email;
          this.login = data.login;
          this.officeId = data.officeId;
          this.isAdmin = data.isAdmin;
      }

      addDevice(deviceId) {
        devices.push(device)
      }
      
      removeDevice(deviceId) {
        //skasowac dany element z danym ID z tablicy
        remove(devices, item => item.id === deviceId);
      }
}
