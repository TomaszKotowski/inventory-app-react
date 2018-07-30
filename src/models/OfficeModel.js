import { observable, action, computed } from "mobx";

export default class OfficeModel {
  @observable id;
  @observable name;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}