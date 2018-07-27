import { observable, action, computed } from "mobx";


export default class Place {
  @observable id;
  @observable name;
  @observable officeId;
}