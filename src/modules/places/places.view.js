import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import { Icon, Flex, WhiteSpace, List } from 'antd-mobile';
import 'antd/dist/antd.css';
import { bind } from 'lodash-decorators';
import { Link, Redirect } from 'react-router-dom';
import './places.style.css';
import NavBarView from '../../components/navigation/navBar.view';



@inject('layoutStore', 'placesStore', 'officesStore')
@observer
class PlacesView extends Component {

  @observable filterOfficeId;
  @observable office;

  @bind
  handlePlacesFilter = (optionValue) => {
    this.filterOfficeId = optionValue;
    this.office = this.props.officesStore.officesList.find((office) => office.id === optionValue);
  }

  render() {
    return (
      <div>
        <div className='top-content'>
          <NavBarView title="Places"/>
          <WhiteSpace />
          <Flex justify="center" className="title-container">
            <Flex.Item>
              Offices
          </Flex.Item>
            <Link to='/places/add'>
              <Icon type="cross" className="cross" />
            </Link>
          </Flex>
          <div>
            <WhiteSpace />
            <Select
              placeholder="Select office"
              style={{ width: `100%` }}
              onChange={this.handlePlacesFilter}>
              {
                this.props.officesStore.officesList.map(office => {
                  return (
                    <Select.Option key={office.id} value={office.id}>{office.name}</Select.Option>
                  )
                })
              }
            </Select>
          </div>
        </div>
        <div>
          <Flex>
            <List className="places-list">
              {
                this.props.placesStore.placesList
                  .filter((place) => place.officeId === this.filterOfficeId)
                  .map((place) => {
                    return (
                      <List.Item
                        key={place.id}
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                      >{place.name}
                        <List.Item.Brief key={place.id} >
                          {this.office.name}
                        </List.Item.Brief>
                      </List.Item>
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

export default withRouter(PlacesView);
