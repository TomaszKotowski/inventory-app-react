import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import { Icon, Flex, WhiteSpace, List } from 'antd-mobile';
import 'antd/dist/antd.css';
import { bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import './places.style.css';
import NavBarView from '../../components/navigation/navBar.view';



@inject('placesStore', 'officesStore')
@observer
class PlacesView extends Component {

  @observable filterOfficeId;
  @observable office;
  @observable placeList = [];
  @observable officeList = [];

  async componentDidMount() {
    const { officesStore, placesStore } = this.props;

    const [officeList, placesList] = await Promise.all([
      officesStore.getAllOffices(),
      placesStore.getAllPlaces(),
    ]);

    this.officeList = officeList;
    this.placeList = placesList;
  }

  @bind
  handlePlacesFilter = (optionValue) => {
    this.filterOfficeId = optionValue;
    this.office = this.props.officesStore.officesList.find((office) => office.id === optionValue);
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <div className='top-content'>
          <NavBarView title="Places" />
          <WhiteSpace />
          <Flex justify="center" className="title-container">
            <Flex.Item>
              Offices
          </Flex.Item>
            <Link to={`${match.path}/add`}>
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
                this.officeList.map(office => {
                  return (
                    <Select.Option
                      key={office.id}
                      value={office.id}>
                      {office.name}
                    </Select.Option>
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
                this.placeList
                  .filter((place) => place.officeId === this.filterOfficeId)
                  .map((place) => {
                    return (
                      <Link key={place.id + 1} to={`${match.path}/${place.id}`}>
                        <List.Item
                          key={place.id}
                          arrow="horizontal"
                        >{place.name}
                          <List.Item.Brief key={place.id+2} >
                            {this.office.name}
                          </List.Item.Brief>
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

export default PlacesView;
