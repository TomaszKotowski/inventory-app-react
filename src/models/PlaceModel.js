import { observable } from "mobx";


export default class PlaceModel {
  @observable id;
  @observable name;
  @observable officeId;

  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.officeId = data.officeId;
  }
}