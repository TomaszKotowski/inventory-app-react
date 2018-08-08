import { observable, action } from 'mobx';
import { find } from 'lodash';
import PlaceService from '../services/PlaceService';

class PlacesStore {

  @observable placesList = [];

  /**
   * Add place to place list
   * @param {Object} data 
   */
  addPlace(data) {
    this.placesList.push(data);
  }

  @action
  async getAllPlaces() {
    if (this.placesList.length < 2) {
      const placeList = await PlaceService.getAllPlaces();
      this.addPlaceList(placeList);
    }
    return this.placesList
  }

  @action
  async getPlaceById(id) {
    const place = find(this.placesList, item => item.id === id)

    if (!place) {
      const newPlace = await PlaceService.getPlaceById(id);
      this.setToUsersList(newPlace);
      return newPlace;
    }

    return place;
  }

  addPlaceList(placeList) {
    this.placesList = placeList;
  }

  setToUsersList(data) {
    const place = find(this.placesList, item => item.id === data.id);
    if (!place) {
      this.placesList.push(data);
    }
  }

  /**
   * Find place by it's id. Return place object or empty string
   * @param {string} placeId 
   */
  findById(placeId) {
    const result = find(this.placesList, el => el.id === placeId);

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