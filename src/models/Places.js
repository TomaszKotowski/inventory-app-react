import { observable, action, computed } from "mobx";


export default class Places {
  @observable id;
  @observable name;
  @observable officeId;
}