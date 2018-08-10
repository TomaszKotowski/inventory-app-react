import { observable, action, computed } from "mobx";

import DeviceService from '../services/DeviceService';


export default class DeviceModel {
  @observable id;
  @observable name;
  @observable belongsToId;
  @observable imageUrl;
  @observable description;
  
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.belongsToId = data.belongsToId;
    this.imageUrl = data.imageUrl;
    this.description = data.description;
  }

  changeOwner(newOwnerId) {
    DeviceService.changeOwner(this.id, newOwnerId);
    this.belongsToId = newOwnerId;
  }
}

