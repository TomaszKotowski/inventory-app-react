import { observable } from 'mobx';
import { find } from 'lodash';
import PlaceService from '../services/PlaceService';

class PlacesStore {

  @observable placesList = [];

  constructor() {
    PlaceService.getAllPlaces().then((list) => {
      this.addPlaceList(list);
    })
  }

  /**
   * Add place to place list
   * @param {Object} data 
   */
  addPlace(data) {
    this.placesList.push(data);
  }
  addPlaceList(placeList) {
    this.placesList = placeList;
  }

  addPlaceList(placeList) {
    this.placesList = placeList;
  }

  /**
   * Find place by it's id. Return place object or empty string
   * @param {string} placeId 
   */
  findById(placeId) {
    const result = find(this.placesList, el => {
      el.id === placeId
    });

    return (result === null) ? '' : result;
  }


  /**
   * Find place by it's name. Return place object or empty string
   * @param {string} placeName 
   */
  findByName(placeName) {
    const result = find(this.placesList, el => {
      el.name === placeName
    });

    return (result === null) ? '' : result;
  }
}

export default new PlacesStore();