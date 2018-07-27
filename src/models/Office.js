import { observable, action, computed } from "mobx";

export default class Office {
  @observable id;
  @observable name;
}