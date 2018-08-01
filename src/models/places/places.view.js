import React, { Component } from 'react';
import { observable, reaction, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import { NavBar, Icon, Flex, Brief, WhiteSpace  } from 'antd-mobile';
import 'antd/dist/antd.css';
import { bind } from 'lodash-decorators';
import OfficesStore from '../../stores/OfficesStore';
import PlacesStore from '../../stores/PlacesStore';


@inject('layoutStore', 'placesStore', 'officesStore')
@observer
export default class PlacesView extends Component {

  componentDidMount() {
    console.log("componentDidMount");
    // console.log(this.props.officesStore.officesList)
    console.log(this.props.placesStore.placesList)

    // const officesNames = reaction(
    //   () => this.props.officesStore.officesList.find((office) => office),
    //   officeName => {
    //     console.log("He", officeName.name)
    //   }
    // )

    // const placesNames = reaction(
    //   () => this.props.placesStore.placesList.map((place) => place),
    //   placeName => {
    //     console.log("He", placeName.name)
    //   }
    // )
    // console.log(officesNames())
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
        <div>
          Officies
        </div>
        <div>
          <Select
            placeholder="Select office"
            style={{ width: `100%` }}
            onChange={this.handleSelectOffice}>
            {
              this.props.officesStore.officesList.map(office => {
                return (
                  <Select.Option key={office.id} value={office.name}>{office.name}</Select.Option>
                )
              })
            }
          </Select>
        </div>
        <div>
            
        </div>
      </div>
    )
  }
};
