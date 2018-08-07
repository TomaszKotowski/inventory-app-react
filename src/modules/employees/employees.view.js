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

  render() {
    return (
      <div>
        <div className='top-content'>
          <NavBarView title="Employees" />
          <WhiteSpace />
        </div>
        <div>
          <Flex>
            <List className="employees-list">
              {
                this.props.userStore.usersList
                  .map((user) => {
                    return (
                      <Link key={user.id + 1} to={`/employees/${user.id}`}>
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
