import { observable } from 'mobx';
import { Bind } from 'lodash-decorators';

class LayoutStore {

  @observable docked = false;

  @Bind
  onDock() {
    this.docked = !this.docked;
  }

};

export default new LayoutStore;