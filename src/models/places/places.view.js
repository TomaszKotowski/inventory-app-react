import React, { Component } from 'react';
import { observable, reaction, action, autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import { NavBar, Icon, Flex, Brief, WhiteSpace, List } from 'antd-mobile';
import 'antd/dist/antd.css';
import { bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import OfficesStore from '../../stores/OfficesStore';
import PlacesStore from '../../stores/PlacesStore';
import NavBarView from '../navigation/navigation.view';
import './places.style.css';


@inject('layoutStore', 'placesStore', 'officesStore')
@observer
export default class PlacesView extends Component {

  @observable filterValue;
  @observable office;

  @bind
  handlePlacesFilter = (value) => {
    this.filterValue = value;
    this.office = this.props.officesStore.officesList.find((office) => office.id == value);
  }

  componentDidMount() {
    console.log("componentDidMount");
    reaction(
      () => this.props.placesStore.placesList.map((place) => place.name),
      (placeOfficeId) => { console.log(placeOfficeId) }
    )

    const officesNames = reaction(
      () => this.props.officesStore.officesList.map((office) => office.id),
      officeName => {
        console.log(officeName)
      }
    )
  }

  render() {
    return (
      <div>
        <NavBar
          rightContent={
            <Icon type="ellipsis"
              onClick={this.props.layoutStore.handleDrawerDocker}
            />
          }>
          Places
        </NavBar>
        <WhiteSpace />
        <Flex justify="center" className="title-container">
          <Flex.Item>
            Officies
          </Flex.Item>
          <Link to="/places/add_device">
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
        <div>
          <Flex>
            <List>
              {
                this.props.placesStore.placesList
                  .filter((place) => place.officeId == this.filterValue)
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
