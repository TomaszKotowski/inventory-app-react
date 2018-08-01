import { observable, action, computed } from "mobx";


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
}

