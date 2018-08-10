import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import { Icon, Flex, WhiteSpace, List } from 'antd-mobile';
import 'antd/dist/antd.css';
import { bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import './employees.style.css';
import NavBarView from '../../components/navigation/navBar.view';


@inject('userStore')
@observer
class EmployeesView extends Component {
  @observable usersList = [];

  async componentDidMount() {
    this.usersList = await this.props.userStore.getAllUsers();
    console.log("did mount emp view", this.props)
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <div className='top-content' className="navbar-sticky">
          <NavBarView title="Employees" />
          <WhiteSpace />
        </div>
        <div className="item-under-sticky">
          <Flex>
            <List className="employees-list">
              {
                this.usersList
                  .map((user) => {
                    return (
                      <Link key={user.id + 1} to={`${match.path}/${user.id}`}>
                        <List.Item
                          key={user.id}
                          arrow="horizontal"
                        >  {user.fullName}
                        </List.Item>
                      </Link>
                    )
                  })
              }
            </List>
          </Flex>
        </div>
      </div>
    )
  }
};

export default EmployeesView;
