import { observable } from 'mobx';
import { Bind } from 'lodash-decorators';

class LayoutStore {

  @observable drawerDocked = false;
  @observable helper = false;

  /**
   * Function that toogles the navigation drawer from the right.
   * To use it in the other components you have import { NavBar, Icon } from 'antd-mobile'; 
   * add rightContent={<Icon type="ellipsis"
   *                         onClick={this.props.layoutStore.handleDrawerDocker}
   *                  />}
   * to NavBar
   */
  @Bind
  handleDrawerDocker() {
    this.drawerDocked = !this.drawerDocked;
  }

};

export default new LayoutStore();