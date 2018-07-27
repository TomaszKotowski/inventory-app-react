import { observable, action, computed } from "mobx";


export default class Device {
  @observable id;
  @observable name;
  @observable belongsToId;
  @observable imageUrl;
  @observable description;
}