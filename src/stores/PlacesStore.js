import { observable } from 'mobx';
import { find } from 'lodash';

class PlacesStore {

  @observable placesList;

  constructor() {
    this.placesList = [];
  }

  /**
   * Add place to place list
   * @param {Object} data 
   */
  addPlace(data) {
    this.placesList.push(data);
  }

  /**
   * Find place by it's id. Return place object or empty string
   * @param {string} placeId 
   */
  findById(placeId){
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